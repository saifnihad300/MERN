//console.dir(document)

//console.log(typeof(document))

//console.log(document.URL)
//console.log(document.domain)

//console.log(document.head)

//console.log(typeof(document.head))

//console.log(document.title)

//console.dir(typeof(document.head))
//console.log(document.body)

//document.title = 'Play with DOM'

//console.log(document.all)
/*
for(let element of document.all)
{
    console.log(element)
} 
*/
//we can't try to DOM Manipulate using the 
//array indexing like document.all[4]

//console.log(document.images)

//console.log(document.forms)



/*
//console.dir(document)

//Get Element by ID

//console.log(document.getElementById('new-task'))
*/

//let headerElement = document.getElementById('header');
//headerElement.textContent='To Do AppS'
//headerElement.innerText='To Do AppS'


//The main diff from textContent and innerText is
//innerText return capital form.gives the browser Display output
//textContent returns small form.gives HTML text content.
/*
console.log(headerElement.textContent)
console.log(headerElement.innerText)
console.log(headerElement.innerHTML)
*/
//console.dir(headerElement)

//headerElement.style.color= 'red'
//headerElement.style.fontSize='30px'

/*all items are manipulate.
//console.dir(document.getElementById)
console.log(document.getElementsByClassName('item'));
let items= document.getElementsByClassName('item');
for(let i=0;i<items.length;i++)
{
    items[i].style.color= 'red'
}
*/
/*//getElement by class
let itemUL= document.getElementById('items')

let items= itemUL.getElementsByClassName('item');
for(let i=0;i<items.length;i++)
{
    items[i].style.color= 'red'
}
*/

/*
//getElementBy Tagname

//let items = document.getElementsByTagName('img')
//let items = document.getElementsByTagName('li')
let items = document.getElementsByTagName('h2')
console.log((items))
*/

//Query Selector
//Query Selector selects only one element while it has multiple elements.(first matched)
//let header = document.querySelector('.header')
//let newTask = document.querySelector('new-task')
//console.log(newTask)

//li 3rd
/*
let lastItem = document.querySelector('.item:last-child')
//console.log(lastItem)
lastItem.style.color = 'red'
*/
//let lastItem = document.querySelector('.item')
//lastItem.style.color = 'red'

/*
let lastItems = document.querySelectorAll('.item:last-child')
//console.log(lastItems)

for(let elements of lastItems)
{
    elements.style.color=  'red'
}
*/
//2nd item select.
//let lastItem = document.querySelector('.item:nth-child(2)')
//lastItem.style.color='red'
//'#denotes id'
//let lastItem = document.querySelector('#items').querySelector('.item:nth-child(2)')
//lastItem.style.color='green'


//parent/children relation
/*
const grandParent = document.querySelector('.todo-list')
const parent= grandParent.children
const children = parent[1].children;//parent[1] that means ul
console.log(children)
*/
/*
//no need to follow hierarchy

const grandParent= document.querySelector('.todo-list')
const children = grandParent.querySelectorAll('.item')
console.log(children)
*/
/*
const children = document.querySelector('.item')
const parent = children.parentElement;
console.log(parent)
*/
/*
const children = document.querySelector('.item')
const grandParent = children.closest('.todo-list') //to find the class todo-list upperwise
console.log(grandParent)
*/
/*
const childrenOne = document.querySelector('.item')
const childrenTwo = childrenOne.nextElementSibling;
//console.log(childrenTwo)
childrenTwo.style.color= 'purple'
*/
/*
const childrenTwo = document.querySelector('.item').nextElementSibling;
const childrenOne = childrenTwo.previousElementSibling;
childrenOne.style.color='red'
*/
/*
//Lesson:5 #DOM MANIPULATE

const divElement = document.createElement('div')
divElement.className='red' //className to declare a class,to make html class
divElement.setAttribute('id', 'manipulate')
divElement.setAttribute('title','manipulate title')

const container = document.querySelector('.todo-list')
const h2Element = container.querySelector('h2')

container.insertBefore(divElement, h2Element) //insert before the 'Incomplete Tasks'
//to insert last appendChild(insert to the html element)

const a = container.appendChild(divElement)
//const b = container.append(divElement)
const b = container.appendChild(divElement, document.createElement('p'),'hello world')//appendChild append only one firstOne. 

//console.log(a)
console.log(b)
*/
/*
//lesson:6 #Listening DOM

//event listener (action defined events)
const headerElement = document.querySelector('#header')

//headerElement.addEventListener('click', (event)=> {
//headerElement.addEventListener('dblclick', (event)=> {
//headerElement.addEventListener('mouseup', (event)=> {
//headerElement.addEventListener('mouseenter', (event)=> {
//headerElement.addEventListener('mouseover', (event)=> {
//headerElement.addEventListener('mouseleave', (event)=> {
headerElement.addEventListener('mouseout', (event)=> {
       //console.log(event);
})
*/
/*
const headerElement = document.querySelector('.mouse')
//headerElement.addEventListener('mouseenter', (event)=>{
    headerElement.addEventListener('mouseover', (event)=>{
    console.log(event) //mouseenter works if the mouse enter from the outside but 
                       //not in the redcolor background in the hello world. Detect in the parent element like <div>

})
*/
/*
//Input Event.
const inputElement = document.querySelector('input[type="text"]') //css selector

//inputElement.addEventListener('keydown', (event)=> {
//inputElement.addEventListener('keyup', (event)=> {
//inputElement.addEventListener('keypress', (event)=> {
//inputElement.addEventListener('focus', (event)=> {
//inputElement.addEventListener('blur', (event)=> {
//inputElement.addEventListener('cut', (event)=> {
//inputElement.addEventListener('paste', (event)=> {
inputElement.addEventListener('input', (event)=> {

    console.log(event)
})
*/

/* //Event Listener
const formElement = document.querySelector('form') //form reload from the browser into the submit button. 
const inputElement = document.querySelector('input[type="text"]'); //form reload from the browser into the submit button. 
                                                   
/*
formElement.addEventListener('submit',(event)=>
{
    //console.log(event) 
    //now a days use the prevent behaviour
    event.preventDefault()
    //console.log(event)
    console.log(event.target)
})
*/
/*
inputElement.addEventListener('keydown',(event)=>
{
    console.log(event.target.value);
})

*///ref. JS html dom event w3 Schools


/**
 * Title: To-do Application using vanilla js DOM
 * Description: This JS file has all the JS functions necessary
   to control the to do application
 */

   //select elements and assign them to variables




let newTask = document.querySelector('#new-task') //select input box
let form  = document.querySelector('form')//select form.
//select the container 'Incomplete Tasks' ul id = 'items' and completeUl
let todoUl = document.querySelector('#items')
let completeUl= document.querySelector('.complete-list ul')


//functions; Add new Task to the Incomplete Tasks


let createTask = function(task)
{
    let listItem = document.createElement('li') //create li element.
    let checkBox = document.createElement('input') //checkBox input type element
    let label = document.createElement('label') //create label with the checkBox


    label.innerText = task; //set the task to the label innerText 
    checkBox.type = 'checkbox'; //input type checkBox

    //listItem to push the checkBox and Task Name.

    listItem.appendChild(checkBox)
    listItem.appendChild(label)

    return listItem; 

    //listItem functions to create the checkBox and Item in the Incomplete Tasks.

}

//functions; mainly adds to the tasks

let addTask = function(event)
{
    event.preventDefault();//prevent default behaviour; reload prevent
    let listItem = createTask(newTask.value); //call the createTask assign to the newTask:generate the listItem.
    //push add task to the incomplete Task
    todoUl.appendChild(listItem)
    newTask.value= "" //blank the input element.

    //when the incomplete task is complete the checkBox is need
    // to bind
    bindIncompleteItems(listItem, completeTask) //pass the taskItems(listItem) and completeTask-goto the completeTask
    //
}

let completeTask = function()
{
  let listItem =this.parentNode; //to get parent from the element itself. 
  //generate the same li to the completed task as the incomplete task while it is form form the 
  //incomplete to the completed task.

  let deleteBtn = document.createElement('button')
  deleteBtn.innerText = 'Delete' //create the delete button to the completed task
  deleteBtn.className = 'delete'
  listItem.appendChild(deleteBtn)

  //remove the checkBox to the completed task

  let checkBox = listItem.querySelector('input[type="checkbox]"')
  checkBox.remove();
  //push the task to the complete ul

  completeUl.appendChild(listItem)

  //the delete button press to take another function call; bind the delete button
  bindCompleteItems(listItem, deleteTask) //same as bindIncompleteItems

}

let deleteTask = function()
{
    let listItem = this.parentNode; //get parent node
    let ul = listItem.parentNode; //child to parent that means li to ul
    ul.removeChild(listItem);
    
}

let bindIncompleteItems = function(taskItem, checkboxClick ){//click the checkbox click where the function is call.
    let checkBox = taskItem.querySelector('input[type="checkbox"]')//input type checkBox
    //when checkBox is change then call the onchange function,it is an event.
    checkBox.onchange = checkboxClick; //call back function
 } 

 let bindCompleteItems = function(taskItem, deleteButtonClick ){//click the delete click where the function is call.
    let deleteButton = taskItem.querySelector('.delete')//to get delete button
    //when deleteButton is change then call the onclick function,it is an event.
    deleteButton.onclick = deleteButtonClick; //call back function
 }

form.addEventListener('submit',addTask)

