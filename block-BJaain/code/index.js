console.log(this.document === document); // true

// ------------

console.log(this === window); //true

// ------------

var myFunction = function () {
  console.log(this);
};
myFunction(); // Window {...}

// ------------

function f1() {
  'use strict';
  return this;
}
console.log(f1() === window); //false. it returns undefined because of strict

// ------------

function foo() {
  console.log('Simple function call');
  console.log(this === window);
}

foo(); //Simple Function call
// true

// ------------

// This for IIFE (Immedietly Invoked function Experession)
(function () {
  console.log('Anonymous function invocation');
  console.log(this === window);
})
(); 
//Anonymous function invocation
// true 

// ------------

var myObject = {
  someMethod : function () {
    console.log(this);
  }
};

myObject.someMethod(); 
//{someMethod: ƒ} which is myObject

// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person('John', 'Reed');
person.displayName(); // Name: John Reed
let person2 = new Person('Paul', 'Adams');
person2.displayName(); // Name: John Reed

// ------------

function foo() {
  'use strict';
  console.log('Simple function call');
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function () {
    console.log(this === window);
  },
};
user.foo(); // Simple function call
// false because of 'use strict'
let fun1 = user.foo1;
fun1(); // true -> i.e default binding , so points to user boj
user.foo1(); // false

// ------------

this.x = 9;
var obj = {
  x: 81,
  getX: function () {
    return this.x;
  },
};
obj.getX(); // 81

var retrieveX = obj.getX;
retrieveX(); //9 bec of default binding is not pointing ro any object , so it'll get x from Global scope
var boundGetX = retrieveX.bind(obj);
boundGetX(); // 81 bec of using bind , so explicit binding obj to function retriveX()

// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person('John', 'Reed');
person.displayName(); // Name: John Reed
let person2 = new Person('Paul', 'Adams');
person2.displayName(); // Name: Paul Adams

person.displayName.call(person2); // Name: Paul Adams 

// ------------

const a = {
  a: 'a',
};
const obj = {
  getThis: () => this,
  getThis2() {
    return this;
  },
};
obj.getThis3 = obj.getThis.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);

// Output
obj.getThis(); 
// Window 
// bec of arrow function , it' dosent have knowledge of this inside getThis(), so by default `this points to Window`

// Output
obj.getThis.call(a);
// Window 
// bec arrow funtion dosent have any knowledge of `this` 

obj.getThis2();
// {getThis: ƒ, getThis2: ƒ, getThis3: ƒ}
// bec of normal fn it has knowlledge of this 

// Output
obj.getThis2.call(a);
// {a: 'a'}


obj.getThis3();
// Window
// Bind call apply wont work on arrow funtion. Therefore this by default will point to window

// Output
obj.getThis4();
// {getThis: ƒ, getThis2: ƒ, getThis3: ƒ, getThis4: ƒ}
// i.e it points to onj 

// -------------












let person = {
  name: 'Jay',
  greet: function () {
    console.log('hello, ' + this.name);
  },
};

person.greet(); // hello Jay

let greet = person.greet;
greet(); // "hello "
// Window bec of default binding

// -------------

let name = 'Jay Global';
let person = {
  name: 'Jay Person',
  details: {
    name: 'Jay Details',
    print: function () {
      return this.name;
    },
  },
  print: function () {
    return this.name;
  },
};
console.log(person.details.print()); // Jay details
console.log(person.print()); // Jay Person

let name1 = person.print; 
let name2 = person.details;

console.log(name1()); // Window.name => ""
console.log(name2.print()); // Window.name => ""

// --------

let outerFn = function () {
  let n = 5;
  console.log(innerItem);
  let innerFn = function () {
    let innerItem = 'inner';
    console.log(n);
  };
  return innerFn;
};

outerFn()(); //5

// -----------

let object = {
  data: [1, 2, 3],
  dataDouble: [1, 2, 3],
  double: function () {
    console.log('this inside of outerFn double()');
    console.log(this); //object
    return this.data.map(function (item) {
      console.log(this); // Window
      return item * 2;
    });
  },
  doubleArrow: function () {
    console.log('this inside of outerFn doubleArrow()');
    console.log(this); // object
    return this.dataDouble.map((item) => {
      console.log(this); // [1,2,3]
      return item * 2;
    });
  },
};

object.double(); // 
object.doubleArrow(); // [2,4,6] 

// --------------

let bobObj = {
  name: 'Bob',
};

function print() {
  return this.name;
}

let printNameBob = print.bind(bobObj);
console.log(printNameBob()); // Bob

// -------------------

let obj1 = {
  data: [1, 2, 3],
  printFirstData: function () {
    if (this.data.length) return this.data[0];
  },
};

let obj2 = {
  data: [4, 5, 6],
  printSecondData: function () {
    if (this.data.length > 1) return this.data[1];
  },
};

let getSecondData = obj2.printSecondData.bind(obj1);
console.log(getSecondData()); // 2

// --------------

const call = {
  caller: 'mom',
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

call.says(); // Hey mom just called

// -----------------

const call = {
  caller: 'mom',
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call.says;

newCall(); // Hey undefined just called

//  -----------------

function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call = {
  caller: 'mom',
  anotherCaller: anotherCaller,
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call.anotherCaller;

newCall(); // undefined called too
