// DATA CONTROLLER


// Store tasks

var taskStore= [];

// Constructior for a task

var Task = function(id, description){
    this.id = id;
    this.description = description;
}

//Add task

function addTask(description){
    var newTask, id;
    //Create new task

    if(taskStore.length > 0){
        id = taskStore[taskStore.length - 1].id + 1;
    }else{
        id = 0;

    }

    newTask = new Task(id, description);

    // push in to data structure
    taskStore.push(newTask);

    //return the new element
    return newTask;
}

// UI CONTROLLER

var DOMStrings = {
    addButton: document.querySelector('.add-task'),
    task: document.querySelector('.search-field'),
    list: document.querySelector('#task-list'),
}

// Add task to UI

function addTaskList(task){
    var listItem, list;
    // Create html string with placeholder text
    listItem = document.createElement('li');
    list = DOMStrings.list;
    list.appendChild(listItem);
    console.log(list);


    // Replace placeholder text with data
    listItem.append(task);


    //Mark task as done
    listItem.addEventListener('click', function(){
        listItem.style.textDecoration = "line-through";
        listItem.style.cursor = "pointer";

    })

}

// APP CONTROLLER

function ctrladdTask() {
    var input;
    var text;
    var newTask;

    // Get input data from DOM
    input = DOMStrings.task;
    text = input.value;
    console.log(text);
    // Check the input field text
    if(text){
        addTaskList(text);
    }
    // Add the task to data structure
    newTask = addTask(text);

    // add the task to UI


    // Clear the field
    input.value = '';
    input.focus();

}


DOMStrings.addButton.addEventListener('click', ctrladdTask)


document.addEventListener('keypress', function (event) {
    // key code 13 is for "Enter"
    if (event.keyCode === 13 || event.which === 13) {
        ctrladdTask();
    }
})
