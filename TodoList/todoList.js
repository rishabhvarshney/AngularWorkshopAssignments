var todolist = (function () {
    function todolist(todoList) {
        this.todoList = todoList;
    }
    todolist.prototype.add = function (name, status) {
        var tmpTodo = {
            name: name,
            status: status
        };
        this.todoList.push(tmpTodo);
        console.log(this.todoList);
    };
    todolist.prototype.complete = function (name) {
        this.todoList.forEach(function (element) {
            if (element.name == name) {
                element.status = false;
            }
        });
    };
    todolist.prototype.edit = function (name, newName) {
        this.todoList.forEach(function (element) {
            if (element.name == name) {
                element.name = newName;
            }
        });
    };
    todolist.prototype.incomplete = function (name) {
        this.todoList.forEach(function (element) {
            if (element.name == name) {
                element.status = true;
            }
        });
    };
    todolist.prototype.delete = function (name) {
        var tmpTodo;
        this.todoList.forEach(function (element) {
            if (element.name == name) {
                tmpTodo = {
                    name: element.name,
                    status: element.status
                };
            }
        });
        var index = this.todoList.indexOf(tmpTodo);
        this.todoList.splice(index, 1);
    };
    todolist.prototype.display = function () {
        this.todoList.forEach(function (element) {
            console.log(element.name + " and " + element.status);
        });
    };
    todolist.prototype.getAll = function () {
        return this.todoList;
    };
    return todolist;
}());
var list = new todolist([{ "name": "Learn Angular", "status": true }]);
function addTodo(name, status) {
    list.add(name, status);
}
function completeTodos(name) {
    list.complete(name);
}
function deleteTodos(name) {
    list.delete(name);
}
function editTodos(name, newName) {
    list.edit(name, newName);
}
function displayItem() {
    list.display();
}
function returnList() {
    return list.getAll();
}
function incompleteTodo(name) {
    list.incomplete(name);
}
