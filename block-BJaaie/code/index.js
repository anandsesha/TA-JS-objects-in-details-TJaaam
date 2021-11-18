console.log(`Hi`)

// PseudoClassical Pattern

CreateAnimal.prototype = {
    eat: function(){
        return `I live in ${this.location} and I can eat`
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
        return this.location;
    },
    summary: function(){
        return `I live in ${this.location} and I have ${this.noOfLegs}`
    }
}

CreateDog.prototype = {
    bark: function(){
        return `I am ${this.name} and I can bark 🐶`
    },
    changeName: function(newName){
        this.name = newName;
        return this.name;
    },
    changeColor: function(newColor){
        this.color = newColor;
        return this.color;
    },
    summary: function(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

Object.setPrototypeOf(CreateDog.prototype,CreateAnimal.prototype)

CreateCat.prototype = {
    meow: function(){
        return `I am ${this.name} and I can do mewo meow 😹`
    },
    changeName: function(newName){
        this.name = newName;
        return this.name;
    },
    changeColorOfEyes: function(newColor){
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    },
    summary: function(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
}

Object.setPrototypeOf(CreateCat.prototype,CreateAnimal.prototype)

function CreateAnimal(location,noOfLegs){    
    this.location = location;
    this.noOfLegs = noOfLegs;
}

function CreateDog(location,noOfLegs,name,color){
    CreateAnimal.apply(this,[location,noOfLegs])
    this.name = name;
    this.color = color;
}

function CreateCat(location,noOfLegs,name,colorOfEyes){
    CreateAnimal.apply(this,[location,noOfLegs])
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}

let animal1 = new CreateAnimal("Mumbai",4)
let dog1 = new CreateDog("Dharamshala",4,"Dodo","Cream")
let cat1 = new CreateCat("Jaipur",4,"Whiskers","green")



// Class Pattern

class Animal{
    constructor(location,noOfLegs){
        this.location = location;
        this.noOfLegs = noOfLegs;
    }
    eat(){
        return `I live in ${this.location} and I can eat`
    }
    changeLocation(newLocation){
        this.location = newLocation;
        return this.location;
    }
    summary(){
        return `I live in ${this.location} and I have ${this.noOfLegs}`
    }
}

class Dog extends Animal{
    constructor(location,noOfLegs,name,color){
        super(location,noOfLegs)
        this.name = name;
        this.color = color;
    }
    bark(){
        return `I am ${this.name} and I can bark 🐶`
    }
    changeName(newName){
        this.name = newName;
        return this.name;
    }
    changeColor(newColor){
        this.color = newColor;
        return this.color;
    }
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

class Cat extends Animal{
    constructor(location,noOfLegs,name,colorOfEyes){
        super(location,noOfLegs)
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }
    meow(){
        return `I am ${this.name} and I can do mewo meow 😹`
    }
    changeName(newName){
        this.name = newName;
        return this.name;
    }
    changeColorOfEyes(newColor){
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    }
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }    
}

let animal1 = new Animal("Mumbai",4)
let dog1 = new Dog("Dharamshala",4,"Dodo","Cream")
let cat1 = new Cat("Jaipur",4,"Whiskers","green")
