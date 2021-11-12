# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.
```js
class Square{
    constructor(side){
        this.side = side;
        this.width = side;
        this.height = side;
    }
}
let sample = new Square(10)
sample.width // 10
sample.height // 10
sample.side // 10
```

- Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`
```js
class Square{
    constructor(side){
        this.side = side;
        this.width = side;
        this.height = side;
    }
    description(){
        return `The square is ${this.width} * ${this.height}`
    }
}
let sample = new Square(10)
```

- Create a method inside the class named `calcArea` that will return the area of the square.
```js
class Square{
    constructor(side){
        this.side = side;
        this.width = side;
        this.height = side;
    }
    description(){
        return `The square is ${this.width} * ${this.height}`
    }
    calcArea(){
        return this.side*this.side;
    }
}
let sample = new Square(10)
```

- Create a `area` getter method using which we can get the area of the square.
```js
class Square{
    constructor(side){
        this.side = side;
        this.width = side;
        this.height = side;
    }
    description(){
        return `The square is ${this.width} * ${this.height}`
    }
    calcArea(){
        return this.side*this.side;
    }
    get area(){
        return this.side*this.side;
    }
}
let sample = new Square(10)
```

- Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`.
```js
class Square{
    set area(areaVal){
        this.width = areaVal;
        this.height = areaVal;
    }
}
let sample = new Square(10)
// Test Case
// sample.area = 10
// Sample{
//     "width": 10,
//     "height": 10
// }
```

- Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.

```js
class Square{
    // let square1 = {}
    // let square2 = {}
    constructor(width,height){
        this.width = width;
        this.height = height;
        this.area = width*height;
    }
    static isEqual(square1,square2){
        if(this.area == this.area){
            console.log(`Hiiii`)
            return true;
        }else{
            return false;
        }
    }
}
let sample = new Square(10,12)
```

- Create two instance of the `Square` class

```js
class Square{
    // let square1 = {}
    // let square2 = {}
    constructor(width,height){
        this.width = width;
        this.height = height;
        this.area = width*height;
    }
    static isEqual(square1,square2){
        if(this.area == this.area){
            console.log(`Hiiii`)
            return true;
        }else{
            return false;
        }
    }
}
let sample = new Square(10,12)
let sample2 = new Square(13,15)
```
<!-- Test Cases -->
<!-- sample
Square {width: 10, height: 12, area: 120}
sample2
Square {width: 13, height: 15, area: 195} -->

- Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.
```js
class Square{
    constructor(width,height){
        this.width = width;
        this.height = height;
        this.area = width*height;
    }
    static isEqual(square1,square2){
        if(this.area == this.area){
            console.log(`Hiiii`)
            return true;
        }else{
            return false;
        }
    }
    get area(){
        return this.area;        
    }
}
```
- Check the `isEqual` method and pass the two instance you created above.

## User Class

- Create a `User` class that accepts `firstName` and `lastName` property
```js
class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let user1 = new User("Anand","Seshadri")
```
- Create a getter method named `fullName` that will return the full name of the person.
```js
class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return this.firstName+" "+this.lastName;
    }
}
let user1 = new User("Anand","Seshadri")

// user1.fullName
// 'Anand Seshadri'
```
- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`
```js
class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return this.firstName+" "+this.lastName;
    }
    set fullName(fullName){
        if(fullName.length < 5){
            alert(`Full name should be more than 5 characters`)
        }else{
            this.firstName = fullName.split(' ')[0];
            this.lastName = fullName.split(' ')[1];
        }
    }
}
let user1 = new User("Anand","Seshadri")
// Test cases
// user1.fullName
// 'Anand Seshadri'
// user1.fullName = "Roman Reigns"
// 'Roman Reigns'
// user1.fullName
// 'Roman Reigns'
// user1.firstName
// 'Roman'
// user1.lastName
// 'Reigns'
```
- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.
```js
class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return this.firstName+" "+this.lastName;
    }
    set fullName(fullName){
        if(fullName.length < 5){
            alert(`Full name should be more than 5 characters`)
        }else{
            this.firstName = fullName.split(' ')[0];
            this.lastName = fullName.split(' ')[1];
        }
    }
    nameContains(str){
        // this.name.includes(str) ? true : false;
        console.log()
        if(this.firstName.includes(str) || this.lastName.includes(str)){
            return true;
        }else{
            return false;
        }
    }
}
let user1 = new User("Anand","Seshadri")
// test cases
// user1.nameContains("re")
// false
// user1.nameContains("es")
// true
```
- Create two instance of the `User` class
```js
let instanceUno = new User("John","Snow")
let instanceDuo = new User("Arya","Stark")
```
- Check by using the `fullName` setter method with name bigger than 5 characters.
```js

```
- Check by using the `fullName` setter method with name less than 5 characters.
```js
class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set fullName(fullName){
        if(fullName.length < 5){
            alert(`Full name should be more than 5 characters`)
        }else{
            this.firstName = fullName.split(' ')[0];
            this.lastName = fullName.split(' ')[1];
        }
    }
}
let user1 = new User("Anand","Seshadri")
// Test cases
// user1.fullName = "Ana"
// 'Ana' also, alerts the message
// user1.fullName = "Anand"
// 'Anand'
```
- Check the `fullName` using getter
```js
class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set fullName(fullName){
        if(fullName.length < 5){
            alert(`Full name should be more than 5 characters`)
        }else{
            this.firstName = fullName.split(' ')[0];
            this.lastName = fullName.split(' ')[1];
        }
    }
    get fullName(){
        return this.firstName+' '+this.lastName;
    }
}
let user1 = new User("Anand","Seshadri")
```
- Check the `nameContains` method
```js
class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set fullName(fullName){
        if(fullName.length < 5){
            alert(`Full name should be more than 5 characters`)
        }else{
            this.firstName = fullName.split(' ')[0];
            this.lastName = fullName.split(' ')[1];
        }
    }
    get fullName(){
        return this.firstName+' '+this.lastName;
    }
    nameContains(str){
        this.firstName.includes(str) || this.lastName.includes(str) ? true : false;     
    }
}
let user1 = new User("Anand","Seshadri")
```