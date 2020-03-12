window.onload = function(){
    var LEFT = 37, UP = 38, RIGHT = 39;
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    var spriteSheet = new Image();
    spriteSheet.src = 'assets/img.png'
    var character = new Sprite(spriteSheet);

    window.addEventListener('keydown', keydownHandler,false);
    window.addEventListener('keyup', keyupHandler,false);

    function keydownHandler(e){
        switch(e.keyCode){
            case RIGHT:
                character.moveRight = true;
                character.moveLeft = false;
                character.moveUp = false;
            break;
            case LEFT:
                character.moveRight = false;
                character.moveLeft = true;
                character.moveUp = false;
            break;
            case UP:
                character.moveRight = false;
                character.moveleft = false;
                character.moveUp = true;
            break;
        }
    }

    function keyupHandler(e){
        switch(e.keyCode){
                case RIGHT:
                    character.moveRight = false;
                break;
                case LEFT:
                    character.moveLeft = false;
                break;
                case UP:
                    character.moveUp = false;
                break;
            }
    }

    spriteSheet.onload = function(){
        init();
    }
    
    function init(){
        loop();
    }
    
    function update(){
        character.move();
    }
    
    function draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        character.draw(ctx);
    }
    
    function loop(){
        window.requestAnimationFrame(loop, canvas);
        update();
        draw();
    }
}

function Sprite(img) {
    this.moveRight = this.moveLeft = this.moveUp = false;
    this.srcX = this.srcY = 0;
    this.width = 24;
    this.height = 32;
    this.posX = this.posY = 0;
    this.img = img;
    this.speed = 1;
    this.countAnim = 0;

    this.draw = function(ctx) {
        console.log( 'dibujale ', this.srcX, this.srcY )
        ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.posX, this.posY, this.width, this.height)
        this.animation()
    }

    this.move = function(){
        console.log('kasldj')
        if(this.moveRight){
            this.posX += this.speed
            this.srcY = this.height * 3;
        } else if(this.moveLeft){
            this.posX -= this.speed
            this.srcY = this.height * 2;
        }
    }

    this.animation = function(){
        if(this.moveLeft || this.moveRight || this.moveUp){
            this.countAnim++;
            if(this.countAnim >= 40){
                this.countAnim = 0;
            }
            this.scrX = Math.floor(this.countAnim / 5) * this.width;
            console.log( 'ac el X', this.scrX );
        }else {
			//Caso nenhuma tecla seja pressionada, o contador de animação é zerado e a imagem do personagem parado é exibida
			this.srcX = 0;
			this.countAnim = 0;
		}
    }
}
