const characters = ['rocket', 'quill', 'gamora', 'drax']
const stones = []

localStorage.setItem('stones', JSON.stringify(stones))

const readStones = JSON.parse(localStorage.getItem('stones'));
console.log(readStones);

document.getElementById('mind').classList.remove('transparente')
document.getElementById('soul').classList.remove('transparente')
document.getElementById('space').classList.remove('transparente')
document.getElementById('time').classList.remove('transparente')
document.getElementById('power').classList.remove('transparente')
document.getElementById('reality').classList.remove('transparente')

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
    }
})

function stoneScore (){
    if (thanos.health == 0 && hero.health > 0) {
        stones.push(localStorage.getItem(stone));
    }
}

stoneScore();

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
}

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
}

const characterSelected = () => {
    const people = localStorage.getItem('character')
    for( let i = 0; i < characters.length; i++) {
        document.getElementById(characters[i] + "-photo").classList.remove('no-show')
        if( people != characters[i] ){
            document.getElementById(characters[i] + "-photo").classList.add('no-show')
        }
    }
}

characterSelected()

const stoneSelected = (stone) => {
    localStorage.setItem('stone', stone)
    window.location.href = "/game.html"
}

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