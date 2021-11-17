console.log(`Hii`)

let animalMethods = {
    eat : function(){
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
        return this.location;
    },
    summary: function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}

let dogMethods = {
    bark: function(){
        alert(`I am ${this.name} and I can bark`)
    },
    changeColor: function(newName){
        this.name = newName;
        return this.name;
    },
    changeColor: function(newColor){
        this.color = newColor;
        return this.color;
    },
    summary: function(){
        return `I am ${this.name} and I am of ${this.color}. I can also bark`
    }
}

Object.setPrototypeOf(animalMethods,dogMethods)

let catMethods = {
    meow: function(){
        alert(`I am ${this.name} and I can do mewo meow 😹`)
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

Object.setPrototypeOf(animalMethods,catMethods)

function createAnimal(location,noOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.noOfLegs = noOfLegs;
    return animal;
}

function createDog(name,color){
    let animal = Object.create(dogMethods);
    animal.name = name;
    animal.color = color;
    return animal;
}

function createCat(name,colorOfEyes){
    let animal = Object.create(catMethods)
    animal.name = name;
    animal.colorOfEyes = colorOfEyes;
    return animal;
}

let animal1 = createAnimal("Mumbai",4)
let dog1 = createDog("Snoey","white")
let cat1 = createCat("whiskers","green")