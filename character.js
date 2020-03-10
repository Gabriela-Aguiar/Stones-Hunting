class Character {
    constructor(values) {
    let { x, y, width, height, strength, health, characterimg,name} = values;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.strength = strength;
    this.health = health;
    this.characterimg = characterimg;
    this.name = name;
    }
    shoot(){
        fire.push(new Shoot())
    }
}

class Hero extends Character {
    constructor(values, jump){
        super (values) 
        this.jump = jump;
    }
}

class Shoot {
    constructor(){
        this.x = hero.x + 100;
        this.y = hero.y + 50;
    }
}





// class Object {
//     constructor(objValues){
//         let objValues = {x, y, height, width, disappear, sum};
//         this.x = x;
//         this.y = y,
//         this.height = height;
//         this.width = this.width;
//         this.disappear = this.disappear;
//         this.sum = sum;
//     }
// }