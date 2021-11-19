## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username); // Hello John
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username); // Hello Arya
  },
};

let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // Hello John 
console.log(user2.sayHello()); // Hello Arya
console.log(user.sayHello.call(user2)); // Hello Arya
console.log(user.sayHello.call(user2, 'Hey')); // Hello Arya
console.log(user.sayHello.apply(user2, ['Hey'])); // Hello Arya
console.log(typeof user.sayHello.bind(user2)); // function. Bind returns a fn reference which is stored in a variable and that is called later.
console.log(user.sayHello.bind(user2)()); // Hello Arya
console.log(userSayHello()); // Hello undefined. because we have not binded
console.log(typeof userSayHello.bind(user2)); // function
console.log(userSayHello.bind(user2)()); // Hello Arya 
console.log(user3.sayHello()); // Error: SayHello is not a fn inside user3
console.log(userSayHello.apply(user3)); // Hello Bran
console.log(userSayHello.call(user3)); // Hello Bran
console.log(userSayHello.bind(user3)); // outputs function sayHello(){..} 
console.log(typeof new MainUser()); // Object 
console.log(typeof new MainUser()); // Object 
console.log(new MainUser().sayHello()); // Hello Tyrian
console.log(new MainUser().sayHello.call(user2)); // Hello Arya 
console.log(new MainUser().sayHello.call(user)); // Hello John
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // Welcome! John
```
