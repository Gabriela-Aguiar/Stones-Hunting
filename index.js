const step = (actual, next) => {
    document.getElementById(actual).classList.add("no-show")
    document.getElementById(next).classList.remove("no-show")
};

const character = (character) => {
 console.log(character)
 step('second','third')
}