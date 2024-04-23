//Exercise 1
const res = num =>  Math.abs((num-13)) > 13 ? 2 * Math.abs(num-13) : Math.abs(num-13); 

//console.log(res(11));

//Exercise 2
// const greeter = (myArray, counter) => {
//     let greetText = 'Hello';
//     for(let name of myArray){
//         console.log(`Hello ${name}`);
//     }
// }

//Exercise 3
const colors = ['red', 'green', 'blue'];

const capitalize = colors => colors.map(color => color.charAt(0).toUpperCase() + color.slice(1));

//console.log(capitalize(colors));

//Exercise 4
var values = [1,60,34,30,20,5];
const lessThanTwenty = values => values.filter(value => value > 20);
console.log(lessThanTwenty(values));