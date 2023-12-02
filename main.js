// 1-Write a program that allow to user enter number then print it
// var num= +prompt("enter number");
// console.log(num);

// 2-Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no
// var num = +prompt("enter number");
// if(num % 3 == 0  && num % 4 == 0){
//     console.log("yes");
// }else{
//     console.log('no');
// }

// 3-Write a program that allows the user to insert 2 integers then print the max
// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter first number");
// if(num1 > num2){
//     console.log(num1);
// }else if(num2 > num1){
//    console.log(num2)
// }else{
//    console.log("both are equal")
// }

// 4- Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.

// var  num = +prompt('enter number');
// if(num > 0 ){
//     console.log('positive')
// }else{
//     console.log('negative')
// }

// 5- Write a program that take 3 integers from user then print the max element
// and the min element.

// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number");
// var num3 = +prompt("enter third number");

// if(num1 > num2 && num1 > num3){
//     console.log("max element = " + num1)
// }else if(num2 > num1 && num2 >  num3){
//     console.log("max element = " + num2)
// }else if(num3 > num1 && num3 >  num2){
//     console.log("max element = " + num3)
// }

// if(num1 < num2 && num1 < num3){
//     console.log('min element ='+ num1)
// }else if(num2 < num1 && num2 < num3){
//     console.log('min element ='+ num2)
// }else if(num3 < num1 && num3 < num2){
//     console.log("min element = " + num3)
// }

// 6- Write a program that allows the user to insert integer number then
// check If a number is oven or odd

// var num = +prompt("enter  number");
// if( num % 2 == 0){
//     console.log("even")
// }else{
//     console.log("odd")
// }

// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant

// var char = prompt("enter character");
// if(char == 'a'||
//     char == 'e'||
//     char == 'i'||
//     char == 'o'||
//     char == 'u' ){
//         console.log('vowel')
//     }else{
//         console.log('consonant')
//     }

// 9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to
// that’s number
// var num = +prompt("enter number")
// for( var i = 1 ; i <= num ;i++){
//     console.log(i);
// }

// 10- Write a program that allows userto insert integerthen print a multiplication table up to 12.
// var num = +prompt('enter number');
// var num1= num;
// for(var i = 0 ; i <= 11 ; i++){
//     console.log(num)
//    num +=num1;
// }

// 12- Write a program that take twoin tegers then print the power
// var num1 = +prompt("enter number1");
// var num2 = +prompt("enter number2");
// console.log(num1**num2)

// 12- Write a program to enter marks of five subjects and calculate total, average and
// percentage.

// var subject=[];
// for( var i =0 ; i <= 4  ; i++){
//     subject[i] = +window.prompt('enter subject');
//    var  total = (subject[0] + subject[1] +
//     subject[2] + subject[3] + subject[4]);
// }
// console.log("total marks = " + total);
// console.log("average marks =" + total/5);
// // // لان المجموع الكلي 500
// // // /500 * 100 = 5
// console.log('percentage =' +total/5 )

// 13-Write a program to input month number and print number of days in that
// month.
// var month = +prompt("enter month number");
//     if(month == 1 ||
//        month == 3 ||
//        month == 5 ||
//        month == 7 ||
//        month == 8 ||
//        month == 10||
//        month == 12){
//         console.log("days in month =  31");
//        }else if(month == 2){
//         console.log('Days in month = 28 or 29');
//        }else if(month == 6){
//         console.log('Days in month = 30');
//        }else{
//         month = +prompt("please enter month number");
//        }

// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade
// var physics = +prompt("enter physics degree");
// var chemistry = +prompt("enter chemistry degree");
// var biology = +prompt("enter biology degree");
// var math = +prompt("enter math degree");
// var computer = +prompt("enter computer degree");
// var total = ( physics + chemistry + biology + math + computer)/5;

// switch(true){
//     case (total >= 90) :
//     console.log("Grad A");
//     break;
//     case (total >= 80) :
//     console.log("Grad B");
//     break;
//     case (total >= 70) :
//     console.log("Grad C");
//     break;
//     case (total >= 60) :
//     console.log("Grad D");
//     break;
//     case (total >= 40) :
//     console.log("Grad E");
//     break;
//     default:
//     console.log("Grad F");
// }

// -----------switch cases

// 15- Write a program to print total number of days in month

// var month = prompt("enter month number");
// switch (month) {
//   case "January":
//   case "March":
//   case "May":
//   case "July":
//   case "August":
//   case "October":
//   case "December":
//     console.log("days in month =  31");
//     break;
//   case "February":
//     console.log("Days in month = 28 or 29");
//     break;
//   case "June":
//   case "April":
//   case "September":
//   case "November":
//     console.log("30");
//     break;
//   default:
//     console.log("please enter the month name not the number");
// }

// 16- Write a program to check whether an alphabet is vowel or consonant

// var char = prompt("enter character");
// switch (char) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("vowel");
//     break;
//   default:
//     console.log("consonant");
// }

// 17- Write a program to find maximum between two numbers
// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number");
// switch (true) {
//   case num1 > num2:
//     console.log("the max number = " + num1);
//     break;
//   case num2 > num1:
//     console.log("the max number = " + num2);
// }


// 18- Write a program to check whether a number is even or odd 
// var num = +prompt("enter  number");
// switch(true){
//     case num % 2 ==0:
//         console.log("even");
//     break;
//     default:
//         console.log('odd')
// }

// 19- Write a program to check whether a number is positive or negative or zero 

// var  num = +prompt('enter number');
// switch(true){
//     case num < 0:
//         console.log("negative");
//     break;
//     case num > 0:
//         console.log("positive");
//     break;
//     case num == 0:
//         console.log("zero");
//     default:
//         console.log("please enter a number");
// }


// 20- Write a program to create Simple Calculator 
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}




