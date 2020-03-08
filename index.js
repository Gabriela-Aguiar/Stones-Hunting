const characters = ['rocket', 'quill', 'gamora', 'drax']

const step = (actual, next) => {
    document.getElementById(actual).classList.add("no-show")
    document.getElementById(next).classList.remove("no-show")
};

const character = (character) => {
 console.log(character)
 localStorage.setItem('character',character)
 step('second','third')
 characterSelected()
}

const random = (random) => {
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
