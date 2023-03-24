/*

//falsy value.
if(false)
{
    console.log('This is a falsy value.')
}

if(0)
{
    console.log("This is a falsy value.")
}

if(null)
{
    console.log("This is a falsy value.")
}
if(undefined)
{ 
    console.log("This is a falsy value.")
}
if(NaN)
{
    console.log("This is a falsy value.")
}
*/

/*
if(15)
{
    console.log("This is a truthy value.")
}
if({})
{
    console.log("This is a truthy value.")
}
if([])
{
    console.log("This is a truthy value.")
}
if("hello")
{
    console.log("This is a truthy value.")
}
if(true)
{
    console.log("This is a truthy value.")
}

*/

function checkTruthyValue (value)
{
   let result = "";
   if(value)
   {
     result=`${value} is a truthy value.`
   }
   else
   {
      result=`${value} is a falsy value.`
   }
   return result;
}

console.log(checkTruthyValue(10))
console.log(checkTruthyValue("hello"))
console.log(checkTruthyValue(undefined))
console.log(checkTruthyValue(true))
console.log(checkTruthyValue(null))
