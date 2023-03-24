//numbers:

var x =10;
var y = 59;

var z=x*y;

console.log(z)
//string 
var fname = "john"
var lname ="Alice"
var fullName=fname+" "+lname
console.log(fullName)

//booleans

var isValid = true;
var isPlayer = false;

console.log(isPlayer)

//null

var age = null;
if(isValid)
{
   age =18;
}
console.log(age)
// undefined.

let m;
console.log(m)

//objects
/*
var studentInfo = {  fname:"Peter", lname : "Hash", studentId : "150291",
                     dateOfBirth : "2 june 1990", session: "2014-15" 
                  };
var typeRes =(`I am ${studentInfo.fname} ${studentInfo.lname}. My date of Birth is ${studentInfo.dateOfBirth}. My student ID is ${studentInfo.studentId} and Session is ${studentInfo.session}.`)
console.log(typeRes)
*/
//arrays

var studentInfo = ["Peter", "Hash", "150291", "2 june 1990", "2014-15"]
var numbers = [10, 13, 18, 23, 19]
console.log(studentInfo)
console.log(numbers)

var symbol1 = Symbol("Poetry")

const myObj={};
myObj[symbol1]="Hello world.";


console.log(myObj[symbol1])
