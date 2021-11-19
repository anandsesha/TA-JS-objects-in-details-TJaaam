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
    changeName: function(newName){
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
// Linking dogs methods to animal methods
Object.setPrototypeOf(dogMethods,animalMethods)

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

Object.setPrototypeOf(catMethods,animalMethods)

function createAnimal(location,noOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.noOfLegs = noOfLegs;
    return animal;
}

function createDog(location,noOfLegs,name,color){
    // By this way the animal object is called and later we'll add dogs methods and dogs properties to it.
    let animal = createAnimal(location,noOfLegs);
    Object.setPrototypeOf(animal,dogMethods)
    
    animal.name = name;
    animal.color = color;
    return animal;
}

function createCat(location,noOfLegs,name,colorOfEyes){
    // By this way the animal object is called and later we'll add cat methods and cat properties to it.
    let animal = createAnimal(location,noOfLegs)
    Object.setPrototypeOf(animal,catMethods)

    animal.name = name;
    animal.colorOfEyes = colorOfEyes;
    return animal;
}

let animal1 = createAnimal("Mumbai",4)
let dog1 = createDog("Mumbai",4,"Snoey","white")
let cat1 = createCat("whiskers","green")