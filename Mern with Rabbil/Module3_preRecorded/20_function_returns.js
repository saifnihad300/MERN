//Returning functions

// function myFunction()
// {
//     return "Bangladesh"   //myFuncion is equal to which value return.
// }

// console.log(myFunction())

function funOne()
{
    return 10;
}
function funTwo()
{
    return funOne();
}

console.log(funTwo())