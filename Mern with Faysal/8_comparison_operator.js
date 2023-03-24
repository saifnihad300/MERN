/*
console.log(5==5)
console.log('5'==5)
console.log(5==6)

console.log(5===5)
console.log('5'===5)
console.log(5===6)
*/
/*
console.log(5!=5)
console.log(5!='5')
console.log(5!=6)

console.log(5!==5)
console.log(5!=='5')
console.log(5!==6)
*/
/*
console.log(5>3)
console.log(5>8)
console.log(5>5)

console.log(5>=3)
console.log(5>=8)
console.log(5>=5)

console.log(5<=3)
console.log(5<=8)
console.log(5<=5)
*/

function comparisonOperator(a, b)
{
    var result = ""
  if(a>b)
  {
    result = `${a} is greater than ${b}`
  }
  else if(a<b)
  {
    result = `${b} is greater than ${a}`
  }
  else 
  {
    result = `Both numbers are equal.`
  }
  return result;
}

console.log(comparisonOperator(5, 2))
console.log(comparisonOperator(10, 30))
console.log(comparisonOperator(10, 10))