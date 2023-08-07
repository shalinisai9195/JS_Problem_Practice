//Part 1 Problems ans solution

//Solution: 2
alert("Im involved.!")
alert('Hello')
alert(`Wor
 ld`)
alert(3 +
1
+ 2); 

// Solution:3
// Add space between Fname and Lname.
  
admin = fname+'  '+lname;
alert(`"${admin}"`);

//Solution: 4
//Fix the below to alert hello Guvi geek

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+' '+lname;
alert( `Hello"${admin}"` ); // "Guvi geek"

//Solution: 5
//Fix the below to alert sum of two numbers
let a = prompt("First number?");
let b = prompt("Second number?");
let s = Number(a) + Number(b);
alert(s);

//Solution: 6
//If you run the below scritpt you will get Code is Blasted
//Explain Why the Code is blasted and how to diffuse it and get Diffused.

var ab = 2 > 12;
//Don't touch below this
if (ab) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

//Solution: 7
//How to get the success in console.
let ac = prompt("Enter a number?");
if (ac == 'string' ) {
 console.log( 'OMG it works for any number inc 0' );
}
else 
{
 console.log( "Success" );

}

//Solution: 8
//How to get the correct score in console.
let value = prompt('How many runs you scored in this ball');

if (parseInt(value) === 4) {
      console.log("You hit a Four");
} else if (parseInt(value) === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

//Solution: 9
//Fix the code to welcome the Employee
let login = 'Employee';
let message = (login == 'Employee') ? 'Greetings' :
(login == 'Director') ? 'Greetings' :
(login == '') ? 'No login' :
'';
console.log(`${login} ${message}`)

//Solution: 10
//Fix the code to welcome the boss
let message1;
if (null || 2 || undefined )
{
  message1 = "welcome boss";
}
else
{
  message1 = "Go away";
}
  console.log(message1);

// Solution: 11
//Change the code to print
// 3 
// 2
// 1

let i = 3;
while(i){
    console.log(i--);
    if(i==0)
    break;
}

// Solution: 12
//Change the code to print 1 to 10 in 4 lines

let num = 1;

for(let i=0; i < 10; i++){
     num = i+1;
     console.log(num);
}

// Solution: 13
//Change the code to print even numbers

for (let num = 2; num <= 20; num += 1) {
    if(num%2 == 0){
        console.log(num)
    }
}

//Solution: 14
//Change the code to print all the gifts

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

// Solution: 15
//Fix the code to disarm the bomb.
let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb disarm ");
  }
}

//Solution: 16
//Whats the msg printed and why? Guess you answer before running it.
//we can't do addition in different datatype, it will gives empty result only.

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += "Hello";
}
console.log(msg);

// O/p: hi

//Part 2 Problems ans solution

//Solution: 1 
//Write a code to print the numbers in the array
var new_Arr = [];
 for (let i = 1; i <= 11; i++) {
    new_Arr.push(i)
}
console.log(new_Arr);

// Solution: 2
//Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

let new_string = "";
 
for (let i = 11; i > 0; i-- ) {
    if(i == 1){
        new_string += i
        break; 
    }
   new_string += i + " "
}
console.log(new_string);

// Solution : 3
//Write a code to replace the array value — If the number is even, replace it with ‘even’.

let numsArrr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let i = 0; i <=10; i++) {
 if(numsArrr[i] %2 == 0 )
 {
  numsArrr[i] = 'even'
 }
}
console.log(numsArrr);

// Solution: 4
//Write a code to replace the array value — If the index is even, replace it with ‘even’.

let numsArr_num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let i = 0; i <=10; i++) {
 if(i %2 == 0 )
 {
    numsArr_num[i] = 'even'
 }
}
console.log(numsArr_num);

//Solution: 5
// Write a code to add all the numbers in the array

let numsArr_num1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum_of_arr = 0;
numsArr_num1.map((e)=>{
    sum_of_arr = e + sum_of_arr
})
console.log(sum_of_arr)

//Solution: 6
//Write a code to add the even numbers only
// let numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let sum=0;
// numsArr.map((e) =>{
//   if(e%2 == 0 ){
//     sum += e
//    }
// })
// console.log(sum)

//Solution: 7
//Write a code to add the even numbers and subract the odd numbers

let numsArr4 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum3=100;

numsArr4.map((e) =>{
  if(e%2 == 0 ){
    sum3 += e
   }else{
    sum3 -= e
   }
})
console.log(sum3)

// Solution: 8
//Write a code to print inner arrays

let numsArr2 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];

for(let i=0; i < numsArr2.length; i++){
   console.log(`Array(${numsArr2[i].length}) ${numsArr2[i]}`);
}

// Solution: 9
//Write a code to print elements in the inner arrays

let numsArr1 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
let str_all1=[];
for (let i = 0; i < numsArr1.length; i++) {
 var inner_array = numsArr1[i] 
   for(let j =0; j < inner_array.length; j++){
    str_all1.push(inner_array[j])
   }
}
console.log(str_all1.join(''));

//Solution: 10
//Write a code to print elements in the inner arrays in reverse
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
let str_all=[];
for (let i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i] 
   for(let j =0; j < inner_array.length; j++){
    str_all.push(inner_array[j])
   }
}
console.log(str_all.reverse().join(' '));

//Part3

//Solution: 1
//Fix the code to Sum of the digits present in the number

let n = 123;
let sum1 = 0;
  while(n > 0){
    let last_num = n % 10;
    sum1 = sum1 + last_num;
    n = n/10;
    }

console.log(Math.floor(sum));

//Solution: 2
//Fix the code to Sum of all numbers using IIFE function
const arr = [9,8,5,6,4,3,2,1];
let sum = (function(arr){
    var ans = 0;
   arr.forEach(element => {
      ds += element;
   });
return ans;
})(arr);

console.log(sum);
