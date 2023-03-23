//variable declarations
//let a=2, b=6, c=10;
/*
//conditional(ternary) operator

var isRaining = true;
let weather = isRaining? "Bring an Umbrella":"Leave the Umbrella at home."
console.log(weather)


let age=10;
isAdult = false;
if(age>18)
{
    isAdult=true;
    
}
let adult= isAdult? "You'll get the national identity":"You're not allowed the national identity"
console.log(adult)
*/

/*
//short-circuit evolutions
var fname = "Alice"
fname && console.log("Hello"+" "+fname)
*/
/*
//template literal

var str = "Bob"
var str1 ="Smith"
var str2 = `My name is ${str} ${str1}`
console.log(str2)
*/

function greet(name="Alice")
{
    console.log(`Hello ${name}`)
}
greet("Bob")

let numbers = [2,3,4,5]
let squrd = numbers.map(num=>num*num)
console.log(squrd)

//Destructuring

let person = {
       name:("Alice"), age:(12),clsss:"Five",sId:("19983")

}
let {name,age,clsss,sId}=person;

console.log(clsss)

let arr = [19, 13,39,80]
let[a,b,c,d]=arr;

console.log(a)
console.log(d)

let arr1=[2,4,8,5]
let arr2=[5,2,1,9]

let arr3=[...arr1,...arr2]
console.log(arr3)


let personInfo={name:"Alice", age:"19"}
let newPersonInfo={...personInfo,studentId:"2983",city:"NYC"}
console.log(newPersonInfo)

let fname = "Alice"
let newAge = "29"

person={fname,newAge}

console.log(person)
