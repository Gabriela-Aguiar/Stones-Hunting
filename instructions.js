let play = true 
document.addEventListener('click', () => {
    if(play){
        let soundGame = new Audio ();
        soundGame.src = 'assets/instructions.mp3'
        soundGame.loop = true
        soundGame.play();
        play = false;
    }
});