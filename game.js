const principalSpace = document.getElementById('principal')
const enemies = [];
const fire = [];
let thanosActive = false

const hero = new Hero({x:100, y:650, width:100, height:100, strength:5, health:10, characterimg:'/assets/Gamoracard.png'})
const thanos = new Character ({x:1350, y:650, width:100, height:200, strength: 10, health: 100, characterimg:'/assets/Rocketcard.png', name: 'Thanos'});


var requestID = null;

const myGameArea = {
    canvas: document.createElement("canvas"),
    frames: 0,
    time: 0,
    start: function() {
        // console.log( this.canvas )
        this.canvas.width = 1420;
        this.canvas.height = 770;
        this.context = this.canvas.getContext("2d");
        this.character = localStorage.getItem('character')
        principalSpace.appendChild(this.canvas)
        requestID = window.requestAnimationFrame(updateGameArea)
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function() {
        console.log(requestID)
        console.log(window.cancelAnimationFrame(requestID))
    },
    drawBackground: function(){
        const img = new Image()
        img.onload = () => {
            this.context.drawImage(img, 0, 0, 1420,770);
            myGameArea.drawScore()
            myGameArea.drawCharacterName()
            myGameArea.drawThanosName()
            myGameArea.drawCharacterLife()
            myGameArea.drawThanosLife()
            myGameArea.drawTime()
            myGameArea.drawCharacter( hero )
            myGameArea.drawEnemies()

        };
        img.src = 'assets/planet1.jpg';
    },

    drawCharacterName: function(){
        this.context.font = "30px Fredoka One";
        this.context.fillStyle = "#E2025B";
        this.context.fillText(this.character.toUpperCase(), 200, 80);
    },
    drawThanosName: function(){
        this.context.font = "30px Fredoka One";
        this.context.fillStyle = "#E2025B";
        this.context.fillText('THANOS', 1050, 80);
    },
    drawCharacterLife: function(){
        if(hero.health > 0){
        this.context.beginPath();
        this.context.strokeStyle = '#0bf774'
        this.context.moveTo(120,120);
        this.context.lineWidth = 30;
        this.context.lineCap = 'round';
        this.context.lineTo((hero.health*28)+120,120);
        this.context.stroke();
        }
    },
    drawThanosLife: function(){
        if(thanos.health > 0){
        this.context.beginPath();
        this.context.strokeStyle = '#0bf774'
        this.context.moveTo(970, 120);
        this.context.lineWidth = 30;
        this.context.lineCap = 'round';
        this.context.lineTo((thanos.health*2.8)+970,120);
        this.context.stroke();
        }
    },
    drawTime: function(){
        this.context.font = "50px Fredoka One";
        this.context.fillText(this.time + " seconds", 600, 100);
    },
    drawScore: function(){
        this.context.font = "25px Fredoka One";
        this.context.fillStyle = "#E2025B";
        this.context.fillText('Score:', 120, 180);
    },
    drawCharacter: function( character ){
        const img = new Image();
        img.onload = () => {
            this.context.drawImage(img, character.x, character.y, character.width,character.height);
        }
        img.src = character.characterimg;
        // console.log(hero.x, hero.y, hero.width, hero.height)

    },
    drawEnemies: function(){
        for (let i = 0; i < enemies.length; i++){
            if(enemies[i].name === "Thanos"){
                enemies[i].x = enemies[i].x-3
            }else{
                enemies[i].x = enemies[i].x-5
            }
            myGameArea.drawCharacter( enemies[i] )
        }
    },

    drawFire: function(elem){
        this.context.beginPath();
        this.context.strokeStyle = 'red'
        this.context.moveTo(elem.x, elem.y);
        this.context.lineWidth = 5;
        this.context.lineCap = 'round';
        this.context.lineTo(elem.x+20, elem.y);
        this.context.stroke();
    },
}

myGameArea.start()
myGameArea.drawBackground()


const time = setInterval(() => {
    myGameArea.time++ 
}, 1000);

function updateGameArea() {
    //  console.log('time')
    //myGameArea.clear();
    myGameArea.drawBackground()
    myGameArea.frames++
    creatingEnemies();
    updateShoot();
    checkCrash();
    createThanos();
    characterCrash();
    gameOver();
    requestID = window.requestAnimationFrame(updateGameArea);
}

function creatingEnemies() {
    if( myGameArea.frames % Math.floor(Math.random()*900) == 0){
        const enemy = new Character ({x:1350, y:650, width:100, height:100, strength:1, health:100, characterimg:'/assets/Quillcard.png'});
        enemies.push(enemy)
    }
}

function updateShoot() {
    fire.forEach ((elem) => {
        elem.x += 20
        myGameArea.drawFire(elem);
    })
}

function checkCrash() {
    fire.forEach( (shoot,index) => {
        enemies.forEach( (enemy,i) => {
            if( enemy.name == 'Thanos' && ( shoot.x >= enemy.x  ) ){
                thanos.health = thanos.health - hero.strength
                fire.splice( index,1 )
                if( thanos.health <= 0 ){
                    enemies.splice( i,1 )
                }
            }else{
                if( shoot.x >= enemy.x ){
                    enemies.splice( i,1 )
                    fire.splice( index,1 )
                }
                if( shoot.x > myGameArea.width ){
                    fire.splice( index,1 )
                }
            }
        })
    })
  }

function createThanos () {
    if(myGameArea.time === 15 && !thanosActive){
        thanosActive = true
        enemies.push( thanos )
    }
}

function characterCrash() {
    enemies.forEach((enemy) => {
        if(enemy.x == hero.x ){
            if( enemy.name !== "Thanos" ){
                hero.health -=1;
            }else{
                hero.health = 0;
            }
        }
    })
}


function gameOver(){
    if (hero.health === 0) {
        myGameArea.stop();
        // alert() 
    }
}

document.addEventListener('keydown', function(event) {
   if(event.keyCode == 39) {
        if(hero.x < myGameArea.canvas.width - 100){
        hero.x = hero.x+20
       }
   } else if (event.keyCode == 37){
       if (hero.x > 0){
        hero.x = hero.x-20
       }
   } else if (event.keyCode == 38){
       if (hero.y > 0){
       hero.y = hero.y-20
       }
    } else if (event.keyCode == 32){
        fire.push(new Shoot(hero.x,hero.y))
    }
  });


  let actions = document.getElementById('actions')
  actions.addEventListener('mouseover', () => {
      document.getElementById('pause').classList.remove('no-show')
      document.getElementById('play').classList.remove('no-show')
      document.getElementById('home').classList.remove('no-show')
  })

  actions.addEventListener('mouseleave', () => {
    document.getElementById('pause').classList.add('no-show')
    document.getElementById('play').classList.add('no-show')
    document.getElementById('home').classList.add('no-show')
})