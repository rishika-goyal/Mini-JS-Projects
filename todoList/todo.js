let todoList=[
    {item: 'buyyymilk', dueDate: '4/10/2025'},
    {item: 'gotoclgg', dueDate: '4/10/2025'} //2 objects
];
displayItems();

function addTodo(){
    let inputElement=document.querySelector('#todoinput');
    let dateElement=document.querySelector('#todoDate');
    let todoItem=inputElement.value;
    let toDoDate=dateElement.value;
    todoList.push({item: todoItem, dueDate: toDoDate});
    inputElement.value='';
    dateElement.value='';
    displayItems();
}

function displayItems(){
    let containerElement=document.querySelector('.todoContainer');
    let newHtml='';
    for(let i=0;i<todoList.length;i++){
        let {item,dueDate}=todoList[i];
        newHtml+=`
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="btndelete" onclick="todoList.splice(${i},1);displayItems();">Delete</button>
        `;
    }
    containerElement.innerHTML=newHtml;
}