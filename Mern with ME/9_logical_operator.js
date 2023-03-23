/*
console.log(5>3 && 8>7)
console.log(5>6 && 6>7)
console.log(3>3 && 7>7)


console.log(5>3 || 2>5)
console.log(3>5 || 2>5)
console.log(3>3 || 5>5)

console.log(!(5>3))
console.log(!(2>5))
*/
console.log(false && (5/0))
console.log(true && (5/0))



function checkBooleans(bln1, bln2)
{
    result=""
   if(bln1 && bln2)
   {
    result= `Both values are true`
   }
   else if(bln1 || bln2)
   {
    result=`At least one values are true.`
   }
   else 
   {
    result = `Both values are false.`
   }
   return result;
}

console.log(checkBooleans(true, false))
console.log(checkBooleans(true, true))
console.log(checkBooleans(false, false))