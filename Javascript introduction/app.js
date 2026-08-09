 // JavaScript code for the introduction page
 alert("Hello, welcome to the JavaScript introduction page!");
 var userName = prompt("Please enter your name:");
 alert("Hello, " + userName + "! Welcome to the JavaScript introduction page!");
//Variable declaration and string assignment
var a = "Hello, world!";
var b = 10;
var c = true;
console.log(a);
addMe(5, 10);
//function declaration and invocation
function addMe(x, y) {
    var sum = x + y;
    console.log("The sum of " + x + " and " + y + " is: " + sum);
}
//coditional statement
var a = true;
if (a != true) {
    document.write("The value of a is true<br>");
}
else if(a == false) {
    document.write("The value of a is false<br>");
} 
else {
    document.write("The value of a is neither true nor false<br>");
}

//switch statement
var day = 3;
switch(day) {
    case 1:
        document.write("Today is Monday");
        break;
    case 2:
        document.write("Today is Tuesday");
        break;
    case 3:
        document.write("Today is Wednesday<br>");
        break;
    case 4:
        document.write("Today is Thursday<br>");
        break;
    case 5:
        document.write("Today is Friday<br>");
        break;
    case 6:
        document.write("Today is Saturday<br>");
        break;
    case 7:
        document.write("Today is Sunday<br>");
        break;
    default:
        document.write("Invalid day");
        break;
}
//CONDITIONAL STATEMENT
var a = 20;
var b = 20;
if (a > b) {
    document.write("a is greater than b");
} else if (a < b) {
    document.write("a is less than b");
} else {
    document.write("a is equal to b");
}
//function with conditional statement
getResults(8); // Output: 'not a nine'
function getResults(a) {
  var b;
  if (a == 9) {
    b = 'you passed a nine';
  } else {
    b = 'not a nine';
  }
  return b;
}

console.log(getResults(8)); // Output: 'not a nine'
console.log(getResults(9)); // Output: 'you passed a nine'
//calculation and ternary operator
var a = 10;
var b = 20;
var result = (a > b) ? "a is greater than b" : "a is less than or equal to b";
console.log(result);