class Character {
    constructor(values) {
    let { x, y, width, height, strength, health, characterimg,name,type} = values;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.strength = strength;
    this.health = health;
    this.characterimg = characterimg;
    this.name = name;
    this.type = type;
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
        this.x = hero.x + 150;
        this.y = hero.y + 100;
    }
}





