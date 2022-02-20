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

console.log([1,2,3,2,1].indexof(2));        //returns index of first 2
console.log([1,2,3,2,1].lastIndexOf(2));    //returns index of last 2