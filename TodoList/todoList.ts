
interface todo {
    name: string ,
    status: boolean
}

class todolist {
    public todoList: todo [];

    constructor(todoList : todo[]) {
        this.todoList=todoList;
    }

    add(name: string, status: boolean) {
        var tmpTodo ={
            name : name,
            status : status
        }
        this.todoList.push(tmpTodo);
        console.log(this.todoList);
    }

    complete(name:string){
        this.todoList.forEach(function (element) {
            if(element.name == name){
                element.status = false;
            }
        });
    }

    edit(name:string, newName: string){
        this.todoList.forEach(function (element) {
            if(element.name == name){
                element.name = newName;
            }
        });
    }

    incomplete(name:string){
        this.todoList.forEach(function (element) {
            if(element.name == name){
                element.status = true;
            }
        });
    }

    delete(name:string){
        var tmpTodo : todo;
        this.todoList.forEach(function (element) {
           if(element.name == name){
               tmpTodo = {
                   name:element.name,
                   status : element.status
               }
           }
        });
        var index = this.todoList.indexOf(tmpTodo);
        this.todoList.splice(index,1);
    }

    display() {
        this.todoList.forEach(function (element) {
            console.log(`${element.name} and ${element.status}`)
        })
    }

    getAll(): todo[]{
        return this.todoList;
    }

}

var list = new todolist([{"name":"Learn Angular","status":true}]);

function addTodo(name: string, status: boolean) {
    list.add(name,status);
}

function completeTodos(name:string){
    list.complete(name);
}

function deleteTodos(name:string){
    list.delete(name);
}

function editTodos(name:string, newName:string){
    list.edit(name,newName);
}

function displayItem() {
    list.display();
}

function returnList(){
    return list.getAll();
}

function incompleteTodo(name:string){
    list.incomplete(name);
}