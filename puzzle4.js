const {readFileSync} = require('fs');

const contents = readFileSync('./puzzle4Data.txt', 'utf-8').split(/\r?\n/);
let count = 0;

contents.map((line) => {
   const [value1, value2] = line.split(',').map((interval)=> interval.split("-").map(Number)).sort((a,b) => [a[0],b[0]])

   if (value1[0] <= value2[0] && value1[1] >= value2[1] || value1[0] >= value2[0] && value1[1] <= value2[1]) {
      count++
   }

})

console.log(count)


//Part 2 
let count2 = 0;
const result = contents.map((line) => {
   const [value1, value2] = line.split(',').map((interval)=> interval.split("-").map(Number)).sort((a,b) => [a[0],b[0]])

   //if not overlapping, then its completely outside of the range of value2 values
   if (value1[0] < value2[0] && value1[1] < value2[0] || value1[0] > value2[1] && value1[1] > value2[1]) {
      count2++
   }


})

//To find how many are overlapping, take data length - non overlapping

console.log(contents.length - count2)