/**
 * Anonymous functions
 * A function without name
 * it can be declared dynamically at runtime
 * an anonymous function can be assigned within a variable.
 */

// var myFunction = function()
// {
//    return "Hello"
// }
// console.log(myFunction())

// var myFunction = function(x)
// {
//    return x
// }
// console.log(myFunction("Hello"))

// var myFunction = function(...x)
// {
//    return x
// }
// console.log(myFunction(1, 2, 3, 4, 5, 6, 7, 8, 10))

//Anonymous function can be reassign, there second function will be work

var myFunction = function()
{
    return "Hello"
}
var myFunction = function()
{
    return "Hello Again."
}
console.log(myFunction())