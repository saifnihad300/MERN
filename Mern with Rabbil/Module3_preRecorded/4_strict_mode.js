/**
 * POLICE
 * Preventing you from using undeclared variables.
 * Removes some of the js silent errors by changing them to throw errors
 * Fixes the mistakes, That is difficult for JS Engine to overcome.
 */

"use strict"
myName();
function myName( )
{
    name = "MERN"
}