window.onload = function(){
    getTodoListDOM();
}
getTodoListDOM = function(){
    var todos = returnList();
    document.getElementById("todoListDiv").innerHTML="";
    todos.forEach(function (element) {
       addDivToDom(element);
       console.log("div added");
    });
}
addDivToDom = function(todo){
    var name = todo.name;
    var status = todo.status;

    var newDiv = document.createElement("div");
    newDiv.setAttribute("class","list-group-item");
    newDiv.appendChild(taskNameElement(name));
    if(status==true){
        newDiv.style.backgroundColor = "lightgreen";
        newDiv.appendChild(completeButton(name));
    }
    else{
        newDiv.appendChild(incompleteButton(name));
        newDiv.style.backgroundColor = "grey";
    }

    newDiv.appendChild(editButton(name));
    newDiv.appendChild(deleteButton(name));

    var parent = document.getElementById("todoListDiv");
    parent.appendChild(newDiv);
}

taskNameElement = function(name){
    var elem = document.createElement("h3");
    elem.innerText = name;

    return elem;
}
completeButton = function(name){
    var btn = document.createElement("button");
    btn.setAttribute("class","btn-success");
    btn.setAttribute("id",name);
    btn.innerText = "Complete";
    btn.setAttribute("onclick","completeTodo('"+name+"')");

    return btn;
}
deleteButton = function(name){
    var btn = document.createElement("button");
    btn.setAttribute("class","btn-danger");
    btn.setAttribute("id",name);
    btn.innerText = "Delete";
    btn.setAttribute("onclick","deleteTodo('"+name+"')");

    return btn;
}
editButton = function(name){
    var btn = document.createElement("button");
    btn.setAttribute("class","btn-info");
    btn.setAttribute("id",name);
    btn.innerText = "Edit";
    btn.setAttribute("onclick","editTodo('"+name+"')");

    return btn;
}
function incompleteButton(name){
    var btn = document.createElement("button");
    btn.setAttribute("class","btn-warning");
    btn.setAttribute("id",name);
    btn.innerText = "Mark as Incomplete";
    btn.setAttribute("onclick","markAsIncomplete('"+name+"')");

    return btn;
}
document.getElementById("btn").onclick = function () {
    var name = document.getElementById("myInput").value;
    addTodo(name,true);
    getTodoListDOM();
}
function editTodo(name) {
    var newName = prompt("Enter the correct Todo name","The name goes here");
    if(newName!=null){
        editTodos(name,newName);
        getTodoListDOM();
    }
}
function deleteTodo(name) {
    deleteTodos(name);
    getTodoListDOM();
}
function completeTodo(name) {
    completeTodos(name);
    getTodoListDOM();
}
function markAsIncomplete(name) {
    incompleteTodo(name);
    getTodoListDOM();
}