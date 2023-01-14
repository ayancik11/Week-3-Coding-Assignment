// #1
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var sum = 0
var first = ages[0]
var last = ages[ages.length - 1];

for (var number of ages){
    sum += number;
}
// #1a
console.log(last - first);

// #1b
ages.push(11)
console.log(ages);

average = sum / ages.length

// #1c
console.log(average + ` is the average age.`)

// #2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);
// #2a
for (let i = 0; i < names.length; i++){
    console.log(names[i].length);
}
var namesTotal = 0
for (let i = 0; i < names.length; i++){
    namesTotal += names[i].length;
    //sum of each element in names and totalling it
    console.log('array total;', namesTotal);
}
var namesAvg = namesTotal / names.length;
console.log(namesAvg + ' is the average number of letters per name.');
// #2b
let combinedNames = ''
for (let i =0; i < names.length; i++){
    let currName = names[i];
    combinedNames += currName + " ";
}
console.log(combinedNames);

// #5
let nameLengths = [];
for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

// #6
var arrayAdd = 0
for(let i = 0; i < names.length; i++){
    arrayAdd += names[i].length;
}
console.log('array total:', arrayAdd);

// #7
function repeatWord(word, n){
    return word.repeat(n);
}
console.log(repeatWord('Hello', 3));

// #8
const fullName = (firstName, lastName) => firstName + ' ' + lastName;
console.log(fullName('Andrew', 'Yancik'));

// #9
var array2 = [11, 24, 45, 69];
function arrayAdd1(array2) {
    var arraySum = 0;
    for (let i = 0; i < array2.length; i++) {
        arraySum = arraySum + array2[i];
    }
    if (100 < arraySum) {
        console.log('true');
        array2 = true
    }
    else if (100 > arraySum) {
        console.log('false');
        array2 = false;
    }
    return array2;
}
arrayAdd1(array2);

// #10
const arr = [];
arr.push(12, 16, 28, 34);
const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(avg);

// #11

const num1 = [69, 23, 14, 56];
const num2 = [12, 18, 74, 8];
function isGreaterAvg(num1, num2) {
    var total1 = 0;
    for (let i = 0; i < num1.length; i++) {
        total1 += num1[i];
    }
    var total2 = 0;
    for (let i = 0; i < num2.length; i++) {
        total2 += num2[i];
    }
    var avg1 = total1 / num1.length;
    var avg2 = total2 / num2.length;
    if (avg1 > avg2) {
        return true;
    }
    else {
        return false;
    }
 }
 console.log(isGreaterAvg(num1, num2));

 // #12
 function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside == true && moneyInPocket >= 10.50) {
        return true;
    }
    else {
        return false;
    }
 }
 console.log(willBuyDrink(true, 11));

 // #13 - I created a function called willGoFishing to determine if I will fish or not.
 // This function is determined by the parameters isWeatherNice, and isNotWindy.
 // If the weather is nice and it's not windy, I will fish. If not, I won't fish.
 function willGoFishing(isWeatherNice, isNotWindy){
    if(isWeatherNice == true && isNotWindy == true){
        return 'I will go fishing'
    } else {
        return 'I will not go fishing'
    }
 }
 console.log(willGoFishing(true, true));