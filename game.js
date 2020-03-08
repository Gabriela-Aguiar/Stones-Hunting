const principalSpace = document.getElementById('principal')


const myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        console.log( this.canvas )
        this.canvas.width = 1420;
        this.canvas.height = 770;
        this.canvas.style.backgroundColor = 'orange'
        this.context = this.canvas.getContext("2d");
        this.character = localStorage.getItem('character')
        principalSpace.appendChild(this.canvas)
    },
    drawBackground: function(){
        const img = new Image();
        img.onload = () => {
          this.context.drawImage(img, 0, 0, 1420,770);
            myGameArea.drawScore()
            myGameArea.drawCharacterName()
            myGameArea.drawThanosName()
            myGameArea.drawCharacterLife()
            myGameArea.drawThanosLife()
            myGameArea.drawTime()
            myGameArea.drawCharacter()
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
        this.context.fillText('0:45', 650, 100);
    },
    drawScore: function(){
        this.context.font = "25px Fredoka One";
        this.context.fillStyle = "#E2025B";
        this.context.fillText('Score:', 120, 180);
    },
    drawCharacter: function(){
        this.context.fillStyle = 'green';
        this.context.fillRect(120,650, 30, 100);
        // const img = new Image();
        //     img.onload = () => {
        //     this.context.drawImage(img, 0, 0, 140,70);
        // }
        // img.src = 'assets/Rocketcard.png';
    },
    // this.context.fillStyle = 'green';
    // this.context.fillRect(120,100, 300, 40);
    // this.context.fillStyle = 'green';
    // this.context.fillRect(970,100, 300, 40);
    // this.context.lineCap = 'round';
    
}





myGameArea.start()
myGameArea.drawBackground()
