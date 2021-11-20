class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){

    }
    sleep(){

    }
    walk(){

    }
}

class Player extends Person{
    constructor(name,age,gender,sportsName){
        super(name,age,gender);
        this.sportsName = sportsName;
    }
    play(){

    }
}

class Teacher extends Person{
    constructor(instituteName){
        this.instituteName = instituteName;
    }
    teach(){

    }
}

class Artist extends Person{
    constructor(kind){
        this.kind = kind;
    }
    createArt(){

    }
}

class Cricketer extends Player{
    constructor(sportsName,teamName){
        super(sportsName)
        this.teamName = teamName;
    }
    playCricket(){
        return `I like to play criket. I play for ${this.teamName}`        
    }
}

let personObj = new Person("Anand",26,"Male")
let payerObj = new Player("Cricket")
let cricketerObj = new Cricketer("Mumbai Indians")