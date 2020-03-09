const principalSpace = document.getElementById('principal')
const enemies = []

const hero = new Hero({x:100, y:650, width:100, height:100, strength:100, health:100, characterimg:'/assets/Gamoracard.png'})

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
    drawBackground: function(){
        const img = new Image()
        // console.log('update');
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
        this.context.beginPath();
        this.context.strokeStyle = '#0bf774'
        this.context.moveTo(120,120);
        this.context.lineWidth = 30;
        this.context.lineCap = 'round';
        this.context.lineTo(400,120);
        this.context.stroke();
    },
    drawThanosLife: function(){
        this.context.beginPath();
        this.context.strokeStyle = '#0bf774'
        this.context.moveTo(970, 120);
        this.context.lineWidth = 30;
        this.context.lineCap = 'round';
        this.context.lineTo(1250,120);
        this.context.stroke();
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
            console.log('aca carga img')
            this.context.drawImage(img, character.x, character.y, character.width,character.height);
        }
        img.src = character.characterimg;
        // console.log(hero.x, hero.y, hero.width, hero.height)

    },
    drawEnemies: function(){
        console.log('pintando los enemigos')
        for (let i = 0; i < enemies.length; i++){
            console.log(enemies[i])
            enemies[i].x = enemies[i].x-3
            myGameArea.drawCharacter( enemies[i] )
        }
    }
}

myGameArea.start()
myGameArea.drawBackground()

const time = setInterval(() => {
    myGameArea.time++ 
}, 1000);

function updateGameArea() {
    // console.log('update')
    //myGameArea.clear();
    myGameArea.drawBackground()
    myGameArea.frames++
    creatingEnemies()
    requestID = window.requestAnimationFrame(updateGameArea);
}

function creatingEnemies() {
    // console.log('entra pa aca')
    if( myGameArea.frames % Math.floor(Math.random()*700) == 0  ){
        // console.log('new enemy')
        const enemy = new Character ({x:1200, y:650, width:100, height:100, strength:100, health:100, characterimg:'/assets/Quillcard.png'});
        enemies.push( enemy )
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
   }
  });
