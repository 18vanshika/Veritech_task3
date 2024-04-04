var todo=document.getElementById("btn")

var result= document.getElementById("result")
var input= document.getElementById("todo")

function todos(){
    var newTodo = document.createElement("li"); 
    var serial= document.getElementsByTagName("li").length+1;
    newTodo.textContent = serial+". " +input.value; // Set its text content to the value of the input field
    result.appendChild(newTodo); // Append the new list item to the result element
    input.value = "";
}
