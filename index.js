
// variable = A container that stores a value.
let fullName = 'LeBron James';
let age = 39;
let occupation = 'Professional Basketball Player';


document.getElementById('myP1').textContent = `Burger ${occupation}`;
document.getElementById('myH1').textContent = fullName;
document.getElementById('p2').textContent = age;


let online = true;

if (!online) {
    console.log('This user is offline')
} else {
    console.log('This user is online')
}

//////////////////
// arithmethic operators = (values, varirables, etc.)
// operators (+ - * /)


//operator precedence
// 1. Parentheses ()
// 2. Exponents (**)
// 3. Multiplication and Division (* /) and modulo
// 4. Addition and Subtraction (+ -)

let result = 1 + 2 * 3 + 5 ** 3;
console.log(result); // Output: 36

let result2 = 6 / 2 ** (3 + 5);
console.log(result2);  // Output: 0.125

////////////
//user input

// let username2 = window.prompt('Enter  your username: ');
// console.log(`username: ${username2}`);


let username;

document.getElementById('submit').onclick = function () {
    username = document.getElementById('username').value;
    document.getElementById('h1').textContent = `Hello lil ${username}`;
}

////
//type conversion = change the datatype of a value to another
// (strings, numbers, booleans)

let x = 5;
let y = "pizza";
let z = "false";

x = String(x);
y = Number(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

////
// const = vraible that cannot be changed (constant)

const PI = 3.14159;
let radius;
let circumference;

document.getElementById('submitRadius').onclick = function () {
    radius = document.getElementById('inputRadius').value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById('radius').textContent = `The circumference is: ${circumference}cm`
}

////
// Math = built-in object that provides a 
//        collection of properties and methods

let x1 = 3.24;
let y1 = 2.56;
let z1 = 2;
let square = 81;
let zz;

zz = Math.round(x1);
zz = Math.ceil(x1);
zz = Math.floor(x1);
zz = Math.trunc(x1);
zz = Math.pow(x1, z1);
zz = Math.trunc(square);
zz = Math.sqrt(x1);

////
// if statements

let time = 12;

if (time >= 1 && time <= 11) {

}

////
// ternary operator =  a shortcut or if and else statements
//                     condition ? value_if_true : value_if_false

let age1 = 19;
let message = age1 >= 18 ? 'You are an adult' : 'You are a minor';
console.log(message);

let time1 = 6;
let message1 = time1 >= 6 && time1 <= 9 ? 'Free breakfast' : 'Sorry, u missed free breakfast';
console.log(message1);

////
// switch = efficient way to handle multiple conditions

let day = 6;

switch (day) {
    case 1:
        console.log("It's Sunday");
        break;
    case 2:
        console.log("It's Monday");
        break;
    case 3:
        console.log("It's Tuesday");
        break;
    case 4:
        console.log("It's Wednesday");
        break;
    case 5:
        console.log("It's Thursday");
        break;
    case 6:
        console.log("It's Friday");
        break;
    case 7:
        console.log("It's Saturday");
        break;
    default:
        console.log(`${day} is invalid`);
}

let grade = 95;
let gradeResult;

switch (true) {
    case grade >= 98 && grade <= 100:
        gradeResult = '1.00';
        break;
    case grade >= 95 && grade <= 97:
        gradeResult = '1.25';
        break;
    case grade >= 92 && grade <= 94:
        gradeResult = '1.50';
        break;
    case grade >= 91 && grade <= 89:
        gradeResult = '1.75';
        break;
    case grade >= 88 && grade <= 86:
        gradeResult = '2.00';
        break;
    case grade >= 85 && grade <= 83:
        gradeResult = '2.25';
        break;
    case grade >= 80 && grade <= 82:
        gradeResult = '2.50';
        break;
    case grade >= 77 && grade <= 79:
        gradeResult = '2.75';
        break;
    case grade >= 74 && grade <= 76:
        gradeResult = '3.00';
        break;
    case grade >= 70 && grade <= 73:
        gradeResult = '4.00';
        break;
    default: grade < 70;
        gradeResult = 'Failed';
}
console.log(gradeResult);

////
// string method = allows you to manipulate and work with text (strings)

////
// string slicing = creating a substring
//                  from a portion of another string 

//          string.slice(start, end)

const fullName1 = "LeBron James";

let firstName = fullName1.slice(0, 7);
console.log(firstName); // Lebron
let lastName = fullName1.slice(7, 12);
console.log(lastName)  // James

let firstName1 = fullName1.slice(0, fullName1.indexOf(" "));
let lastName1 = fullName1.slice(fullName1.indexOf(" ") + 1);

console.log(firstName1);
console.log(lastName1);

const email = "lebronjames@gmail.com";

let username3 = email.slice(0, email.indexOf("@"));
console.log(username3)

////
// method chaining

// let username4 = window.prompt("Create an username:")

// no chaining

// username4 = username4.trim();
// let letter = username4.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username4.slice(1);
// extraChars = extraChars.toLocaleLowerCase();
// username4 = letter + extraChars;

// console.log(username4)

// with  chaining

// username4 = username4.trim().charAt(0).toUpperCase() + username4.trim().slice(1).toLowerCase;

////
// function = a section of reusable code.

////
// variable scope = where a variable is recognizable and accessible
//                  (local vs global) uses local first before global

let x2 = 4;

function2();

function function1() {
    let x2 = 3
    console.log(x);
}

function function2() {
    let x2 = 5
    console.log(x);
}

////
// array = a variable like structure that can hold more than 1 value

// nibbas.push("Curry")
// nibbas.pop()
// nibbas.unshift()
// nibbas.shift()

let nibbas = ["LeBron", "Embid", "A.D."]

console.log(nibbas)

for (let nibba of nibbas) {
    console.log(nibba)
}

////
// spread operator = allows an iterable such as an array or string to be expanded
//                    into seperate elements (unpacks the elements)

let nibbas2 = ["Tyrone", "Davoyne Shower Handle", "Yunjin"]
console.log(nibbas2);

let numbers2 = [1, 2, 3, 4, 5]
let maximum = Math.max(...numbers2)
console.log (maximum)

let username4 = "Cinnabunnnxd"
let letters = [...username4].join(".");
console.log(letters)

let join = [...nibbas2, ...numbers2]
console.log(join)

////
// rest parameters = (...rest) allows a function work with a variable number of arguments
//                   by bundling them into an array

//              spread = expands an array into seperate elements 
//              rest = bundles seperate elements into an array

function sum (...numbers1) {
    let result3 = 0;
    for (let number1 of numbers1){
        result += number1;
    }
    return result3
}

const total = sum(1, 2, 3, 4, 5);
console.log(`Your total is $${total}`)


function combineStrings(...strings){
    return strings.join(" ");
}

const fullname = combineStrings("Mr.", "LeBron", "The", "Goat", "James")
console.log(fullname);


////
// callback = a function that is passs as an argument to another function
//          used to handle asynchronous operations
//          1. reading a file
//          2. network requests
//          3. interacting with databases

//          'hey, when ur dine, call this next'

// function hello(callback){
//     // setTimeout(function (){
//         console.log("hello")
//         callback();
//     // }, 3000)
    
// }
// function goodbye (){
//     console.log("goodbye")
// }
// function leave (){
//     console.log("leave")
// }

// hello()


function summ(callback, x, y) {
    let tangina = x + y;
    // callback(tangina);
}

function displayConsole(tangina) {
    console.log(tangina);
}

sum(displayConsole, 1, 2);

////
// forEach() = method used to iterate over the elements of an array and apply a specified 
//              funcion (callback) to each element

//              array.forEach(callback)

let numberss = [1,2,3,4,5]


numberss.forEach(display)


function double(element, index, array){
    array[index] = element  * 2
    
}

function triple(element, index, array){
    array[index] = element  * 3
    // numberss.forEach(triple)
}

function squaree(element, index, array){
    array[index] = Math.pow(element, 2)
    //   numberss.forEach(square)

}

function display(element){
    console.log(element)
}

let foods = ["apple", "pizza", "Dinakdakan"];

foods.forEach(capitalize)
foods.forEach(displayy)

function upperCase(elementt, index, array){
    array[index] = elementt.toUpperCase();
}

function capitalize(elementt, index, array){
    array[index] = elementt.charAt(0).toUpperCase() + elementt.slice(1)
}

function displayy(elementt) {
    console.log(elementt);
}

////
// .map() =accepts a callback and applies that function to each
//          element of an array, then return a new array

const  numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(squareee)

console.log(squares)

function squareee(element){
 return Math.pow(element, 2)
}

const students = ["Spongebob", "Patrick", "Squidward"]
const studentsUpper = students.map(upperCasee);

console.log()

function upperCasee(element){
    return element.toUpperCase();
}

const dates = ["2024-10-9", "2025-2-20", "2028-12-25"]
const formattedDates = dates.map(formatDates)

console.log(formattedDates)

function formatDates(element){
    const parts = element.split("-")
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}

////
// .filter() = creates a new array by filtering out elements

let numbersss = [1,2,3,4,5,6,7,8,9,10]
let evenNumss = numbersss.filter(isEven)
let oddNumss =numbersss.filter(isOdd)

console.log(oddNumss)

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

const ages = [16,17,18,19,20,99]
const isAdultt = ages.filter(isAdult)
const isChildren = ages.filter(isChild)

console.log(isAdultt)

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element <= 18;
}

const words = ["Apple", "banana", "kiwi", "watermellon"]
const shortWords = words.filter(getShortWords)

console.log(shortWords)

function getShortWords (element){
    return element.length <= 6;
}

function getLongWords (element){
    return element.length > 7;
}

////
// .reduce() = reuce the elements of an array to a single value

const values = [99, 109, 5, 10, 25, 28]
const totall = values.reduce(sum2)

console.log(`$${totall.toFixed(2)}`)

function sum2 (accumulator, element){
    return accumulator + element
}

const grades = [75,80,89,90,99,100]
const maximumm = grades.reduce(getMax)

console.log(maximumm)

function getMax (accumulator, element){
    return Math.max(accumulator,element)
}

function getMin (accumulator, element){
    return Math.min(accumulator,element)
}

////
// function declaration = define a reusable block of code 
//                        that performs a specific task

function sayHello(){
    console.log("Hello!")
}

// const cubess = numberrs.map(cube)
// function cube (element){
//     return Math.pow(element , 3)
// }

// const hello =  function(){
//     console.log("Hello!")
// }

// function expressions = a way to define functions as values
//                       or variables

const numberrs = [1, 2, 3, 4, 5, 6, 7]

const cubes = numberrs.map(function cube (element){
    return Math.pow(element , 3)
})
const squareeee = numberrs.map(function(element){
    return Math.pow(element,2)
})
const isEvenn = numberrs.filter(function(element){
    return element % 2 === 0 ;
})
const isOddd = numberrs.filter(function(element){
    return element % 2 !== 0 ;
})
const total2 = numberrs.reduce(function(accumulator, element){
    return accumulator + element
})

console.log(cubes)

// setTimeout(function(){
//     console.log("Hello!")
// }, 4000);

////
// arrow functions = a consice way to write function expression good
//                  for simple functions that you use only once 
//                  (parameters) => some code

const herllo = () => console.log("jello")
herllo()

const herllo2 = (name) => console.log(`jellow ${name}`)
herllo2("KKillo")

setTimeout (() => console.log('hellow'), 2000)

const numberrs2 = [1, 2, 3, 4, 5, 6, 7]

const cubes2 = numberrs.map((element) => Math.pow(element, 3))

const squareeee2 = numberrs.map((element) => Math.pow(element, 2))
const isEvenn2 = numberrs.filter((element) => element % 2 === 0 )
const isOddd2 = numberrs.filter((element) => element % 2 !== 0 )
const total22 = numberrs.reduce((accumulator, element) => accumulator + element)

console.log(total22)

////
// object = A collection of related properties or methods that can represent
//          real world objects (people, products, places)
//          object = {key:value, function()}


const person1 = {
    firstName: "LeBron",
    lastName: "James",
    age: 39,
    isEmployed: true,
    sayHello: function (){console.log("tagnina mo:)")}
}

console.log(person1.firstName)
person1.sayHello()

const person2 = {
    firstName: "Davoyne",
    lastName: "Shower Handle",
    age: 19,
    isEmployed: false,
    isStudent: true,
    sayHello: () => console.log("Hello mf")
}


////
// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

const person3 = {
    name: "Levron",
    favFood: "Dinakdakan",
    sayHello: function(){ console.log(`Ako to si${this.name}`)}
}

person3.sayHello()

////
// constructor = special method for defining the properties annd 
//              methods of objects

function car (producer, model, year, color){
    this.producer = producer,
    this.model = model,
    this.year = year,
    this.color = color 
    this.drive = function(){console.log(`You are driving the ${producer}`)}
}

const car1 = new car ("Aston Martin", "Valkyrie", 2024, "Matte Black")
const car2 = new car ("Ford", "Mustang", 2023, "White")

console.log(car1.producer)
car2.drive()

////
// class = (ES6 feature) provides a more structured and cleaner way to work with
//          objects compared to tratidional constructor function
//          ex. static keyword, encapsulation, inheritance

class product {
    constructor(name, price){
        this.name = name;
        this.price= price;
    }

    displayProduct (){
        console.log(`Product: ${this.name}`)
        console.log(`Price $${this.price.toFixed(2)}`)
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05

const product1 = new product ("Cardigan", 59.99)
product1.displayProduct()

const total222 = product1.calculateTotal(salesTax)
console.log(`Total price (with tax): ${total222.toFixed(2)}`)

////
// static = keyword that defines properties or methods that belong to a class
//          itself rahter than the objects created from that class (class owns
//          anything static, not the objects)

class MathUtil {
    static PI = 3.14159

    static getDiameter(radius){
        return radius * 2
    }
    static getCircumference(radius){
        return 2 * this.PI * radius
    }
    static getArea(radius){
        return this.PI * radius * radius
    }
}
console.log(MathUtil.PI)
console.log(MathUtil.getDiameter(19))
console.log(MathUtil.getArea(22))
console.log(MathUtil.getCircumference(10))


class User{
    static userCount = 0

    constructor(username){
        this.username = username
        User.userCount++
    }

    static getUserCount (){
        console.log(`There are ${User.userCount} users currently online`)
    }
}

const user1 = new User("Dr. Perky")
const user2 = new User("Dr. Perky")

console.log(user1.username)
console.log(User.userCount)
User.getUserCount()

////
// inheritance = allows a new class to inherit properties and methods
//               from an existing class (parent -> child)
//               helps with code reusability

class animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
}
class Rabbit extends animal{
    name = "rabbit"
    run(){
        console.log(`This ${this.name} is running`)
    }
}
class Fish extends animal{
    name = "fish"
    swim (){
        console.log(`This ${this.name} is swimming`)
    }
}
class Hawk extends animal{
    name = "hawk"
    fly(){
        console.log(`This ${this.name} is flying`)
    }
}

const rabbit = new Rabbit()
const fish = new Fish()
const hawk = new Hawk()

console.log(hawk.alive)
rabbit.eat()
fish.sleep()
rabbit.run()

////
// super = keyword is used in classes to call the constructor or access 
//         the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent

class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    move(speed){
        console.log(`The ${this.name} moves at the speed of ${speed}`)
    }
}
class Rabbitt extends Animal{
    constructor(name, age, runSpeed) {
        super(name, age)
        this.runSpeed = runSpeed
    }
    run(){
        console.log(`This ${this.name} can run`)
        super.move(this.runSpeed)
    }
}
class Whale extends Animal{
    constructor(name, age, swimSpeed) {
        super(name, age)
        this.swimSpeed = swimSpeed
    }
    swim(){
        console.log(`This ${this.name} can swim`)
        super.move(this.swimSpeed)
    }
}
class Eagle extends Animal{
    constructor(name, age, flySpeed) {
        super(name, age)
        this.flySpeed = flySpeed
    }
    fly(){
        console.log(`This ${this.name} can fly`)
        super.move(this.flySpeed)
    }
}

const bunny = new Rabbitt("Cinnabun", 2, 75)

console.log(bunny.name)

bunny.run()

////
// getter = special method that makes a property readable
// setter = special method that make a property writable
// validate and modify a value when reading/writing a property

class Rectangle {
    constructor(width, height){
        this.width = width
        this.height = height
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth
        } else {
            console.error("invalid number")
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight
        } else {
            console.error("invalid number")
        }
    }
    get width(){
        return `${this._width.toFixed(1)}`
    }
    get height(){
        return `${this._height.toFixed(1)}`
    }
    get area (){
        return `${(this._width * this._height).toFixed(1)}cm^2`
    }
}
const rectangle = new Rectangle(1, 2)
console.log(rectangle.width)
console.log(rectangle.area)

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    set firstName(newFirstName){
        if (typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName
        } else {
            console.error("Enter a non-empty string")
        }
    }
    set lastName(newLastName){
        if (typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName
        } else {
            console.error("Enter a non-empty string")
        }
    }
    set age (newAge){
        if (typeof newAge === "number" && newAge >= 0){
            this._age = newAge
        } else{
            console.error("Age must be a non-negative number")
        }
    }
    get firstName(){
        return this._firstName
    }
    get lastName(){
        return this._lastName
    }
    get fullName (){
        return this._firstName + " " + this.lastName
    }
    get age (){
        return this._age
    }
}
const person = new Person ("Walter", "White", 60)

console.log(person.fullName)

////
// destructuring = extract values from arrays and objects, then assign them to variables
//                 in a convenient way 
//                 [] = to person array destructuring
//                 {} = to perform object destructuring

//      Example 1
//  swapping values of two variables

// [a, b] = [b, a]

// let a = 1
// let b = 2

// console.log(a)
// console.log(b)

//  example 2
// swap 2 elements in an array

// const colors = ['red', 'green', 'blue']

// [colors[0], colors[2]] = [colors[2], colors[0]]

// console.log(colors)

// example 3
// assign array elements to variables

const colors2 = ['red', 'green', 'blue', 'black', 'pink']

const [firstColor, secondColor, thirdColor, ...extraColors] = colors2

console.log(firstColor)
console.log(extraColors)

// example 4
// extract values from objects

const person4 = {
    firstNamee: "Anthony",
    lastNamee: "Carmelo",
    agee: 89,
    job: "Basketball Player"
}

const {firstNamee, lastNamee, agee, job} = person4

console.log(firstNamee)

// example 5
// destructure in function parameters



////
// nested objects = objects inside of other objects.
//                  allows you to represent more comples data structures
//                  child object is enclosed by a parent object

const person5 = {
    fullname: 'Lebron James',
    age: 29,
    isStudent: false,
    hobbies: ["Basketball", "Valorant"],
    address: {
        street: "Tomas Morato",
        city: "Quezon City",
        country: "Philippines"
    }
}
console.log(person5.address)

for(const property in person5.address){
    console.log(person5.address[property])
}




class person6 {
    constructor(name, age, ...address){
        this.name = name
        this.age = age
        this.address = new Address(...address)
    }
}

class Address{
    constructor(street, city, country){
        this.street = street
        this.city = city
        this.country = country
    }
}
const nibba1 = new person6 ("Osas", 29, "TOmas morato", "RIzal city", "JOrrdan")
console.log(nibba1)

////
// arrays of objects

const fruits =  [{name: "Apple", color: "Red", Calories: 99}, 
                {name: "Orange", color: "orange", Calories: 95}, 
                {name: "kiwi", color: "brown", Calories: 11}, 
                {name: "durian", color: "pink", Calories: 109}]

console.log(fruits[0].name)
console.log(fruits)

fruits.forEach(fruits => console.log(fruits.Calories))

const fruitNames = fruits.map(fruit => fruit.name)
console.log(fruitNames)

const maxFruit = fruits.reduce((max, fruits) =>
    fruits.Calories > max.Calories ? fruits : max)
console.log(maxFruit)

////
// sort () = method used to sort elements of an array in place.
//           sorts elements as strings in lexicographic order
//           lexicographic = (alphabet + numbers +  symbols) as strings

let numberss2 = [1,2,5,4,3,9,6,7,8,11]
numberss2.sort((a, b) => a - b)
console.log(numberss2)

let studentsList = ["Lebron", "Durant", "JOradn"]
studentsList.sort()
console.log(studentsList)

////
// date objects = objects that contain values that represent dates and time
//                these date objects can be changd and formatted
//                year, month, day, hour, minute, second, ms
const date = new Date()
const year = date.getFullYear()
console.log(date)

////
// closure = a function defined inside of another function, the inner function
//           has access to the variables and scope of the outer function
//           allow for private variables and state maintenance 
//           used frequently in JS frameworks: React, vue, angular

function outer(){
    let message = "helloo"

    function inner(){
        console.log(message)
    }
    inner()
}
outer()

function createCounter(){
    let count = 0
    function increment(){ 
        count++
        console.log(`Count increased to ${count}`)
    }

    function getCount(){
        return count
    }

    return {increment, getCount}
}
const counter = createCounter()
counter.increment()
counter.increment()
console.log(`current count is ${counter.getCount()}`)


function createGame(){
    let score = 0 

    function increaseScore(points){
        score += points
        console.log(`+${points}pts`)
    }
    
    function decreaseScore(points){
        score -= points
        console.log(`-${points}pts`)
    }
    
    function getScore (){
        return score
    }

    return{increaseScore, decreaseScore, getScore}
}
const game = createGame()

game.increaseScore(100)
game.decreaseScore(48)
console.log(`total score: ${game.getScore()}`)

////
// setTimeout() = function in JS that allows you to schedule the execution
//                of a function after an amount of time (milliseconds)
//                times are approximate (varies based on the workload of the JS runtime environment)
//                setTimeout(callback, delay)

setTimeout (() => console.log('put tank in a mall'), 2000)

function startTimer(){
    setTimeout (() => window.alert('put tank in a mall'), 2000)
}

////
// ES6 module = an external file that contains reusable code that can be imported
//              into other JS files. 
//              Write reusable code for many different apps.
//              can contain variables, classes, functions ... and more

import {PII, getCircumference, getArea, getVolume} from './mathUtil.js'

const area2 = getArea(20)

console.log(`${area2.toFixed(2)}cm`)

////
// synchronous = executes line by line consecutively in a sequencial manner
//               code that waits for an operation to complete

// asyynchronous = allow multiple operations to be performed concurrently without waiting
//                 it does not block the execution flow and allows the program to continue
//                 (I/O operations, network requests, fetching data, 
//                  Handled with: callbacks, promises, aync/wait)

function func1(callback){
    setTimeout(()=> {console.log("task 1")
        callback()}, 3000)
}
function func2(){
    console.log("task 2")
    console.log("task 3")
    console.log("task 4")
}
func1(func2)

////
// error =  an object that is created to represent a problem that occurs
//          occur often with user input or establishing a connection

// try {} = encloses code that might potentially cause an error
//  catch {} = catch and handle any thrown errors from try {}
//  finally {} = (optional) always executes. used mostly for clean up
//              ex. close files, close connections, release resources

try{
    console.log(tanginaa)
}
catch(err){
    console.error(err)
}

try{
    // const dividend = Number(window.prompt(`Enter a dividend: `))
    // const divisor = Number(window.prompt(`Enter a divisor: `))

    if(divisor == 0){
        throw new Error("tangnaisnd mo")
    }
    if (isNaN(dividend) || isNaN(divisor)){
        throw new Error("isa ka pa")
    }
    const result = dividend / divisor
    console.log(result)
}
catch(errorr){
    console.error(errorr)
}

////
// DOM = Document Object Model
//       object {} that represents the page you see in the web browser and provides
//       you with an API to interact with it. Web browser constructs the DOM when
//       it  loads an HTML document, and structures all the elements in a tree-like
//       representation. JS cab access the DOM to dynamically change the content, 
//       structure, and style of a web page.




////
// element selectors = Methods used to target and manipulate HTML elements 
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// document.getElementById()        // ELEMENT OR NULL
// document.getElementByClassName() // HTML COLLECTION
// docmunet.getElementByTagName()   // HTML COLLECTION
// document.querySelector()         // FIRST ELEMENT OR NULL
// document.querySelectorAll()      // NODELIST

const myHeading = document.getElementById("myHeading")
myHeading.style.backgroundColor = "yellow"

const pElements = document.getElementsByTagName("p")
console.log(pElements)

// for(let pElement of pElements){
//     pElement.style.backgroundColor = "pink"
// }
Array.from(pElements).forEach(pElement =>{
    pElement.style.backgroundColor = "pink"
})

// const buttons = querySelectorAll("button")

// buttons.forEach(button =>{
//     button.style.backgroundColor = "purple"
// })

////
// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using javascript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

const ulElements = document.querySelectorAll("ul")

ulElements.forEach(ulElement =>{
    const firstChild = ulElement.firstElementChild
    firstChild.style.backgroundColor = "pink"
})

////
// eventListener = Listen to a specific events to create interactive web pages
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback);

const myBox = document.getElementById("myBox")

function changeColor(event){
      
}

myBox.addEventListener("click", callback)




















// const tite = document.querySelector('#lebron')

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then(response => response.json())
// .then ((bronny) => {
//     console.log(bronny)
// })
// .catch((errr) =>{
//     console.log(errr)
// })
const submitt = document.querySelector('.submit')
const apiKey = 'c40063e5acce0c711af35da046cf11c9'
const wordSearch = (word) => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=${apiKey}`)
    .then(response => {
        if (!response.ok) throw new Error('cannot access')
        return response.json()
    }).then(data => {
        console.log(data)
        ///location variables
        const latitude = data?.coord?.lat
        const longitude = data?.coord?.lon
        const cityName = data?.name
        const country = data?.sys?.country
        //temp variables
        const temp = data?.main?.temp
        const tempMax = data?.main?.temp_max
        const tempMin = data?.main?.temp_min
        const pressure = data?.main?.pressure

        const humid = data?.main?.humidity
        const weather = data?.weather[0]?.main
        const weatherDesc = data?.weather[0]?.description
        const windDeg = data?.wind?.deg
        const windSpeed = data?.wind?.speed

    }).catch(err => {
        console.log(err)
    })

submitt.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector('#search').value.trim()

    if (input != '') {
        console.log("meron")
        wordSearch(input)
    } else {
        console.log("wala")
    }
})
