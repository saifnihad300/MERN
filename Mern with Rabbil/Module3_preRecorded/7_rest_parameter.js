//Using rest parameter, a function can be called with any number of arguments
//rest parameter is prefixed with three dots(...)
/*
function calculation(...numbers)
{
  let sum = 0;
  for(let i of numbers)
  {
    sum+=i;
  }
  console.log(sum)
}

calculation(20, 3, 2, 9, 14, 5, 8, 12, 17, 2, 1, 7)
*/

//rest parameters with more parameters
function calculation(a, b, ...numbers)
{
    let sum= 0;
    for(let i of numbers)
    {
        sum= sum+i;
    }
    return (a+b+sum);
}

let value = calculation(19, 11, 2, 3, 4, 7, 6);
console.log(value)

