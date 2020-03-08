class Character {
    constructor(values) {
    let { x, y, width, height, strength, health} = values;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.strength = strength;
    this.health = health;
    }
    damage(damage){
        
    }
    move(){

    }
}

class Hero extends Character {
    constructor(values, power, jump){
        super (values) 
        this.power = power;
        this.jump = jump;
    }
    attack() {

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