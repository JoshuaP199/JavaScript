function pFormat(n) {
    document.write("<p>" + n + "</p>");
}
function h2Format(n) {
    document.write("<h2>" + n + "</h2>");
}

//Data Sets------------------------------------------------------------------
h2Format("Data Sets");
let listOfNumbers = [2,3,5,7,11];
pFormat(listOfNumbers[2]);
pFormat(listOfNumbers[0]);
pFormat(listOfNumbers[2-1]);

//Methods--------------------------------------------------------------------
h2Format("Methods");
let sequence = [1,2,3];
sequence.push(4);
sequence.push(5);
pFormat(sequence);
pFormat(sequence.pop());
pFormat(sequence);

//Objects----------------------------------------------------------------------
h2Format("Objects:");
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
pFormat(day1.squirrel);
pFormat(day1.wolf);

day1.wolf = false;

pFormat(day1.wolf);

let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};

pFormat(Object.keys({x:0, y:0, z:2}));

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b:3, c:4});
pFormat(objectA.a);
pFormat(objectA.b);
pFormat(objectA.c);
console.log(objectA);

let journal = [
    {events: ["work", "touched tree", "pizza", "running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed treeth"],
     squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts", "beer"],
     squirrel: true},
    //And so on ...
];

//Mutability-------------------------------------------------------------------------------------
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log('object1 == object2 ' + (object1 == object2));
console.log('object1 == object3 ' + (object1 == object3));

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

const score = {visitors: 0, home: 0};
//This is okay
score.visitors = 1;

//This is not okay
//score = {visitors: 1, home: 1};

//The Lycanthrope's Log----------------------------------------------------------
let journal2 = [];

function addEntry(events, squirrel) {
    journal2.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

//Computing Correlation-----------------------------------------------------------------------------
function phi(table) {
    return(table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
                   (table[0] + table[1]) *
                   (table[1] + table[3]) *
                   (table[0] + table[2]));
}

h2Format("Lycanthrope's Log")
pFormat(phi([76,9,4,1]));

//Further Arrayology----------------------------------------------------------------------------------
let todoList = [];

function remember(task) {           //adds task to end of array
    todoList.push(task);
}

function getTask() {                //get's task and removes from front of array
    return todoList.shift();
}

function rememberUrgently(task) {   //adds task to front of array
    todoList.unshift(task);
}

console.log([1,2,3,2,1].indexOf(2));        //returns index of first 2
console.log([1,2,3,2,1].lastIndexOf(2));    //returns index of last 2

console.log([0,1,2,3,4].slice(2,4));
console.log([0,1,2,3,4].slice(2));

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(['a', 'b', 'c', 'd', 'e']));

//Strings and Their Properties-------------------------------------------------
console.log("coconuts".slice(4,7));

console.log("coconut".indexOf("u"));

console.log("one two three".indexOf("ee"));

console.log("   okay \n".trim());

console.log(String(6).padStart(3, "0"));

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
console.log(words.join(". "));

console.log("LA".repeat(3));
let string = "abc";

console.log(string.length);
console.log(string[1]);

//Rest Parameters--------------------------------------------
function max(...numbers) {
    let result = -Infinity;
    for(let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}

console.log(max(4,1,9,-2));

let numbers = [5,1,7];
console.log(max(...numbers));

let words2 = ['never', 'fully'];
console.log(['will', ...words2, "understand"]);

//The Math Object-----------------------------------------------
function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle), y: radius * Math.sin(radius)};
}
console.log(randomPointOnCircle(2));

//Destructuring---------------------------------------------------------
let {me} = {me: "Faraji", age:23};
console.log(me);

//JSON------------------------------------------------------------------
let string1 = JSON.stringify({squirrel: false, events: ["weekend"]});
console.log(string1);

console.log(JSON.parse(string1).events);
