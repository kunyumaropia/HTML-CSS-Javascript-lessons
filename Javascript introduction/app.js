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
        document.write("Today is Wednesday");
        break;
    case 4:
        document.write("Today is Thursday");
        break;
    case 5:
        document.write("Today is Friday");
        break;
    case 6:
        document.write("Today is Saturday");
        break;
    case 7:
        document.write("Today is Sunday");
        break;
    default:
        document.write("Invalid day");
}
