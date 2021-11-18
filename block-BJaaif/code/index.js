/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
  // add code here
  let obj = {};
  obj.name = name;
  obj.age = age;
  return obj;
}

var vicky = makePerson('Vicky', 24);

/********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
  // add code here
  greet: function(){
    console.log(`Hello`)
  }
};
function person(){
  let obj = Object.create(personStore)
  return obj;
}

/********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/
let personTwoMethods = {
  greet: function(){
    console.log(`Hello`)
  },
  introduce: function(){
    console.log(`Hi, my name is Sandra`)
  }
}

function personFromPersonStore(name, age) {
  // add code here
  let obj = Object.create(personTwoMethods)
  obj.name = name;
  obj.age = age;
  return obj;
}

var sandra = personFromPersonStore('Sandra', 26);

/********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

// add code here

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
  // add code here
  this.greet = function(){
    console.log(`Hello`)
  }  
}

// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor();
simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
  // add code here
  this.name = name;
  this.age = age;
  this.greet = function(){
    return console.log(`Hello`)
  }
  this.introduce = function(){
    console.log(`Hi my name is Mike`)
  }
}

var mike = new personFromConstructor('Mike', 30);

/********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
// add code here

mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
  constructor() {
    
  }
  greet(){
    console.log(`Hello`)
  }

  // add code here
}

// /********* Uncomment this line to test your work! *********/
var george = new PersonClass();
george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

// add code here
class DeveloperClass{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  introduce(){
    return `Hi my name is Thai`
  }
}

/********* Uncomment these lines to test your work! *********/
var thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function () {
    console.log('I am a ' + this.type);
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = 'User';
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore /* Put code here */;


let someMethods = {
  sayType: function(){
    console.log(`I am Admin`)
  },
  sharePublicMessage: function(){
    console.log(`Welcome Users`)
  }
}

function adminFactory(name, score) {
  // Put code here
  let user = Object.create(someMethods);
  return user;
}

/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = adminFactory('Eva', 5);

/********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType() // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
