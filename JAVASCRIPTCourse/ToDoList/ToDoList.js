const todoList =[{name: 'hero' , duedate: '02-02-2004'}];
displaytodoList();

function displaytodoList(){
    let temp='';
    for(let i=0;i<todoList.length;i++){
        const todoObject=todoList[i];
        const name1 = todoObject.name;
        const duedate1 = todoObject.duedate;

        const dhtml =
        `<div>${name1}</div><div>${duedate1}</div>
        <button onclick="todoList.splice(${i},1);
        displaytodoList();">
        Delete
        </button>`;
        temp += dhtml;
    }
    document.querySelector('.display1').innerHTML = temp;
}

function addTodo(){
    var inputEle = document.querySelector('.name-input');
    var name = inputEle.value;

    var dateEle = document.querySelector('.date-input');
    var date = dateEle.value;

    todoList.push({
        name : name,
        duedate: date
    });

    inputEle.value='';
    dateEle.value='';
    displaytodoList();
}

function handleEvent(event){
    if(event.key === 'Enter'){
        addTodo();
    }
}