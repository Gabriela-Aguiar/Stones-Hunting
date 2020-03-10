const principalSpace = document.getElementById('principal')
const enemies = [];
const fire = [];
let thanosActive = false
let srcX;
let srcY;
let currentFrame = 0;
let frameHero = 0;
let urlImage = '';
let urlBackground = '';

if(localStorage.getItem("character") == 'quill'){
    urlImage = '/assets/starlord.png'
} else if(localStorage.getItem("character") == 'gamora'){
    urlImage = '/assets/gamora.png'
} else if(localStorage.getItem("character") == 'rocket'){
    urlImage = '/assets/rocket.png'
} else {
    urlImage = '/assets/drax.png'
}

if(localStorage.getItem("stone") == 'mind'){
    urlBackground = 'assets/planet1.jpg'
} else if(localStorage.getItem("stone") == 'soul'){
    urlBackground = 'assets/planet4.jpg'
} else if(localStorage.getItem("stone") == 'time'){
    urlBackground = 'assets/planet2.jpg'
} else if(localStorage.getItem("stone") == 'space'){
    urlBackground = 'assets/planet6.jpeg'
} else if(localStorage.getItem("stone") == 'reality'){
    urlBackground = 'assets/planet5.jpeg'
} else if (localStorage.getItem("stone") == 'power'){
    urlBackground = 'assets/planet3.jpeg'
}



const hero = new Hero({x:80, y:550, width:200, height:200, strength:5, health:10, characterimg:urlImage, type:'hero', name:localStorage.getItem("character")})
const thanos = new Character ({x:1350, y:450, width:200, height:300, strength: 10, health: 100, characterimg:'/assets/Thanos.5.png', name: 'Thanos', type:'boss'});


var requestID = null;

const myGameArea = {
    canvas: document.createElement("canvas"),
    frames: 0,
    time: 0,
    score: 0,
    start: function() {
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
        window.cancelAnimationFrame(requestID)
        alert('GAME OVER')
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
        img.src = urlBackground;
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
        this.context.font = "35px Fredoka One";
        this.context.fillStyle = "#E2025B";
        this.context.fillText('Score: ' + this.score, 120, 180);
    },
    drawCharacter: function( character ){
        const img = new Image();
        // console.log( requestID )
        let sY = 0
        img.onload = () => {

            if( character.type === 'hero') {
                sY = 96
            } else if ( character.type === 'enemies') {
                sY = 48
            }

            if( character.type !== 'boss' ){
                if(character.name == 'drax'){
                    if(frameHero == 0){
                        this.context.drawImage(img, 0,112,40,56,character.x, character.y, character.width,character.height);
                        frameHero++
                    }else if(frameHero == 1){
                        this.context.drawImage(img, 40,112,40,56,character.x, character.y, character.width,character.height);
                        frameHero++
                    }else if(frameHero == 2){
                        this.context.drawImage(img, 40,112,40,56,character.x, character.y, character.width,character.height);
                        frameHero++
                    }else{
                        this.context.drawImage(img, 120,112,40,56,character.x, character.y, character.width,character.height);
                        frameHero=0
                    }
                } else{
                if(frameHero == 0){
                    this.context.drawImage(img, 0,sY,32,48,character.x, character.y, character.width,character.height);
                    frameHero++
                }else if(frameHero == 1){
                    this.context.drawImage(img, 32,sY,32,48,character.x, character.y, character.width,character.height);
                    frameHero++
                }else if(frameHero == 2){
                    this.context.drawImage(img, 64,sY,32,48,character.x, character.y, character.width,character.height);
                    frameHero++
                }else{
                    this.context.drawImage(img, 96,sY,32,48,character.x, character.y, character.width,character.height);
                    frameHero=0
                }
              }
            }else {
                if(frameHero == 0){
                    this.context.drawImage(img,0,48,48,48,character.x, character.y, character.width,character.height);
                    frameHero++
                }else if(frameHero == 1){
                    this.context.drawImage(img,48,48,48,48,character.x, character.y, character.width,character.height);
                    frameHero++
                }else{
                    this.context.drawImage(img,96,48,48,48,character.x, character.y, character.width,character.height);
                    frameHero = 0
                }
            }
        }
        img.src = character.characterimg;

    },
    drawEnemies: function(){
        for (let i = 0; i < enemies.length; i++){
            if(enemies[i].type === "boss"){
                enemies[i].x = enemies[i].x-1
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
        const enemy = new Character ({x:1350, y:550, width:200, height:200, strength:1, health:100, characterimg:'/assets/alien.png', type:'enemies'});
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
            if( enemy.type ==='boss' && ( shoot.x >= enemy.x  ) ){
                thanos.health = thanos.health - hero.strength
                fire.splice( index,1 )
                if( thanos.health <= 0 ){
                    enemies.splice( i,1 )
                }
            }else{
                if( shoot.x >= enemy.x ){
                    enemies.splice( i,1 )
                    fire.splice( index,1 )
                    score = myGameArea.score++;
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
            if( enemy.type !== "boss" ){
                hero.health -= 1;
            }else{
                hero.health = 0;
                console.log('HEALTH ZERO')
            }
        }
    })
}

function updateFrame(){
    currentFrame = ++currentFrame % frameCount;
    srcX = currentFrame * width;
    srcY = 0;
}

function gameOver(){
    if (hero.health === 0) {
        myGameArea.stop();
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