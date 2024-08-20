
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

let firstName =  fullName1.slice(0, 7);
console.log(firstName); // Lebron
let lastName = fullName1.slice(7,  12);
console.log(lastName)  // James

let firstName1 = fullName1.slice(0, fullName1.indexOf(" "));
let lastName1 = fullName1.slice(fullName1.indexOf(" ") + 1);

console.log(firstName1);
console.log(lastName1);

const email = "lebronjames@gmail.com";

let username3 = email.slice(0,  email.indexOf("@"));
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
    if(!response.ok) throw new Error ('cannot access')
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

    if (input != ''){
        console.log("meron")
        wordSearch(input)
    } else {
        console.log("wala")
    }
})