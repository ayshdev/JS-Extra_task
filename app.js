let footer = "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬"

// ex 1
console.log("EXERCISE 1");

let numbers = [10, 15, 20, 25, 30, 35];
let evenNum = ""
console.log(`Original Array: ${numbers}`);
console.log("Even Numbers:-");

for (var i=0; i<numbers.length ; i++){
    if (numbers[i]%2 === 0) {
        console.log(numbers[i]);
    }
}
console.log(footer);


// ex 2
console.log("EXERCISE 2");

let nums = [1, -3, 0, 5, -2, 0, 7, -9];
let pos = [];
let neg = [];
let zero = [];

for (var i=0; i<nums.length ; i++){
    if (nums[i]>0) {
        pos.push(nums[i])
    } else if (nums[i]<0) {
        neg.push(nums[i])
    } else if (nums[i] == 0) {
        zero.push(nums[i])
    }
}
console.log(`Original Array: ${nums}`);
console.log(`Positive: ${pos.length}`);
console.log(`Negative: ${neg.length}`);
console.log(`Zero: ${zero.length}`);


console.log(footer);


// ex 3
console.log("EXERCISE 3");

let arr = [2, 88, 45, 67, 100, 5];
let largestNum = arr[0]

for (var i=0; i<arr.length ; i++){
    if (arr[i]>largestNum) {
        largestNum = arr[i]
    }
}

console.log(`Original Array: ${arr}`);

console.log(`Largest Number: ${largestNum}`);


console.log(footer);

// ex 4
console.log("EXERCISE 4");

let tableNum = +prompt("EXERCISE 4: \nEnter any number to see its table.");
console.log(`Table of ${tableNum}`);

for (var i=1; i<=10 ; i++){
    console.log(`${tableNum} × ${i} = ${tableNum*i}`);
}

console.log(footer);

// ex 5
console.log("EXERCISE 5");

let num = +prompt("EXERCISE 5:\nEnter a number to check if it is prime.")
let flag = true

if (num<=1) {
    flag = false
} else{

for (var i=2; i< num ; i++){
    if (num%i === 0) {
        flag=false
    }
}
}

if (flag) {
    console.log(`${num} is a prime number.`);
    
} else{
     console.log(`${num} is not a prime number.`);
}

console.log(footer);


// Output: 3 names start with 'A'
// ex 6
console.log("EXERCISE 6");

let names = ["Ali", "Ahmed", "Bilal", "Areeba", "Sara"];
let initials = []
for(let i=0; i<names.length; i++){
    initials.push(names[i].slice(0,1))
}

// console.log(initials);

let a = []

for (var i=0; i<initials.length ; i++){
    if (initials[i] == "A") {
        a.push(initials[i])
    }
}

// console.log(a);
console.log(`Original Array: ${names}`);
console.log(`${a.length} names start with 'A'.`);


console.log(footer);



// ex 7


// Age < 13 => Child
// Age < 20 => Teen
// Age < 60 => Adult
// Else => Senior

console.log("EXERCISE 7");

let ages = [5, 12, 17, 25, 35, 65, 80];

console.log(`Original Array: ${ages}`);


for (var i=0; i<ages.length ; i++){
    if (ages[i]<13) {
        console.log(`${ages[i]} - Child`);
    } else if (ages[i]<20) {
        console.log(`${ages[i]} - Teen`);
    } else if (ages[i]<60) {
        console.log(`${ages[i]} - Adult`);
    } else{
        console.log(`${ages[i]} - Senior`);
    }
}

console.log(footer);

// ex 8
console.log("EXERCISE 8");
console.log("Odd Numbers:-");


for (var i=0; i<50 ; i++){
    if (i%2 === 1) {
        console.log(i);
    }
}

console.log(footer);


// ex 9
console.log("EXERCISE 9");

let number = [2, 4, 6, 8, 10];
let sum = 0;

for (let i=0; i<number.length ; i++){
    sum += number[i]
}
console.log(`Original Array: ${number}`);

console.log(`Sum: ${sum}`);

console.log(footer);




// ex 10

// Marks >= 90 => A
// Marks >= 80 => B
// Marks >= 70 => C
// Marks >= 60 => D
// Else => Fail


console.log("EXERCISE 10");

let marks = +prompt("EXERCISE 10: \nEnter you marks to check your grade.")
let grade;

if (marks >= 90) {
    grade = "A"
} else if (marks >= 80) {
    grade = "B"
} else if (marks >= 70) {
    grade = "C"
} else if (marks >= 60) {
    grade = "D"
} else {
    grade= "Fail"
}

console.log(`Marks: ${marks} \nGrade: ${grade}`);

console.log(footer);







