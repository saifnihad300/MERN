/*
var x =15;
var y = 13;

var z = x+y;
console.log(z)

var str = "Alice"
var str1="Peter"

var z = str+" "+str1;

console.log(z)
console.log(x-y)
console.log(x*y)
console.log(x/y)
*/

/*
let m= 19;
m--;
let n=30;
n++;
console.log(m)
console.log(n)
*/

function mathOperator(a, b)
{
  var addition = a+b;
  var subtraction= a-b;
  var multiplication = a*b;
  var division = a/b;
  var remainder = a%b;

  console.log(`Sum: ${addition}`)
  console.log(`Difference: ${subtraction}`)
  console.log(`Multiplication: ${multiplication}`)
  console.log(`Division: ${division}`)
  console.log(`Quotient: ${remainder}`)

}
mathOperator(10,5)