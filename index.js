let play = true;
document.addEventListener('click', () => {
    if(play){
        let soundGame = new Audio ();
        soundGame.src = 'assets/main.mp3'
        soundGame.loop = true
        soundGame.play();
        play = false;
    }
});

const characters = ['rocket', 'quill', 'gamora', 'drax'];
let stones = [];

if(localStorage.getItem('stones') !== null){
    stones = JSON.parse(localStorage.getItem('stones'))
};

const ref = localStorage.getItem('ref');
const readStones = JSON.parse(localStorage.getItem('stones'));

if(ref == 'game'){
    document.getElementById('first').classList.add('no-show')
    document.getElementById('second').classList.add('no-show')
    document.getElementById('third').classList.remove('no-show')
};

document.getElementById('mind').classList.remove('transparente');
document.getElementById('soul').classList.remove('transparente');
document.getElementById('space').classList.remove('transparente');
document.getElementById('time').classList.remove('transparente');
document.getElementById('power').classList.remove('transparente');
document.getElementById('reality').classList.remove('transparente');

stones.forEach((stone) => {
    if(stone === 'mind') {
        document.getElementById("mind").classList.add("transparente")
        document.getElementById('firstStone').src='assets/mind.png';
    } else if (stone === 'soul') {
        document.getElementById("soul").classList.add("transparente")
        document.getElementById('secondStone').src='assets/soul.png';
    } else if (stone === 'space') {
        document.getElementById("space").classList.add("transparente")
        document.getElementById('thirdStone').src='assets/space.png';
    } else if (stone === 'time') {
        document.getElementById("time").classList.add("transparente")
        document.getElementById('fourthStone').src='assets/time.png';
    } else if (stone === 'power') {
        document.getElementById("power").classList.add("transparente")
        document.getElementById('fiftyStone').src='assets/power.png';
    } else if (stone === 'power') {
        document.getElementById("reality").classList.remove("transparente")
        document.getElementById('sixthStone').src='assets/reality.png';
        soundGame.pause();
    }
});

document.getElementById('progress').style.width = (16.6 * stones.length) + '%';
document.getElementById('percent').innerHTML = stones.length;

const step = (actual, next) => {
    document.getElementById(actual).classList.add("no-show")
    document.getElementById(next).classList.remove("no-show")
};

const character = character => {
 localStorage.setItem('character',character)
 step('second','third')
 characterSelected()
};

const random = () => {
    let finalCharacter = '';
    let count = 0;
    for (i = 0; i < characters.length; i++) {
        document.getElementById(characters[i]).removeAttribute("onClick")
        document.getElementById(characters[i]).classList.remove("person")
    }
    const time = setInterval(() => { 
        if (count < 25) {
        const randomCharacter = Math.floor(Math.random()*characters.length);
        for (i = 0; i < characters.length; i++) {
            document.getElementById(characters[i]).style.backgroundColor = "rgba(0,0,0,0.7)"
        }
        const elem = document.getElementById(characters[randomCharacter])
        elem.style.backgroundColor = "rgba(0,0,0,0)"
        count++
        finalCharacter = characters[randomCharacter];
      } else {
          clearInterval(time)
          setTimeout(() => {
              character(finalCharacter);
          }, 2000)
      }
    }, 100);
};

const characterSelected = () => {
    const people = localStorage.getItem('character')
    for( let i = 0; i < characters.length; i++) {
        document.getElementById(characters[i] + "-photo").classList.remove('no-show')
        if( people != characters[i] ){
            document.getElementById(characters[i] + "-photo").classList.add('no-show')
        }
    }
};

characterSelected();

const stoneSelected = (stone) => {
    localStorage.setItem('stone', stone)
    window.location.href = "game.html"
};

document.getElementById('mind').addEventListener('mouseover', ()=>{
    document.getElementById('easy').style.color = 'greenyellow';
});
document.getElementById('soul').addEventListener('mouseover', ()=>{
    document.getElementById('easy').style.color = 'greenyellow';
});
document.getElementById('space').addEventListener('mouseover', ()=>{
    document.getElementById('medium').style.color = 'orange';
});
document.getElementById('time').addEventListener('mouseover', ()=>{
    document.getElementById('medium').style.color = 'orange';
});
document.getElementById('reality').addEventListener('mouseover', ()=>{
    document.getElementById('hard').style.color = 'red';
});
document.getElementById('power').addEventListener('mouseover', ()=>{
    document.getElementById('hard').style.color = 'red';
});

document.getElementById('mind').addEventListener('mouseleave', ()=>{
    document.getElementById('easy').style.color = '';
});
document.getElementById('soul').addEventListener('mouseleave', ()=>{
    document.getElementById('easy').style.color = '';
});
document.getElementById('space').addEventListener('mouseleave', ()=>{
    document.getElementById('medium').style.color = '';
});
document.getElementById('time').addEventListener('mouseleave', ()=>{
    document.getElementById('medium').style.color = '';
});
document.getElementById('reality').addEventListener('mouseleave', ()=>{
    document.getElementById('hard').style.color ='';
});
document.getElementById('power').addEventListener('mouseleave', ()=>{
    document.getElementById('hard').style.color = '';
});

document.getElementById('rocket').addEventListener('mouseover', ()=>{
    document.getElementById('selectRocket').style.color = '#ff9966';
});
document.getElementById('quill').addEventListener('mouseover', ()=>{
    document.getElementById('selectQuill').style.color = '#cc66ff';
});
document.getElementById('gamora').addEventListener('mouseover', ()=>{
    document.getElementById('selectGamora').style.color = '#00ff99';
});
document.getElementById('drax').addEventListener('mouseover', ()=>{
    document.getElementById('selectDrax').style.color = '#ff5050';
});

document.getElementById('rocket').addEventListener('mouseleave', ()=>{
    document.getElementById('selectRocket').style.color = '';
});
document.getElementById('quill').addEventListener('mouseleave', ()=>{
    document.getElementById('selectQuill').style.color = '';
});
document.getElementById('gamora').addEventListener('mouseleave', ()=>{
    document.getElementById('selectGamora').style.color = '';
});
document.getElementById('drax').addEventListener('mouseleave', ()=>{
    document.getElementById('selectDrax').style.color = '';
});