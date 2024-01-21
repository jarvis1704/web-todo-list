const taskAdderBtn=document.querySelector('.taskadder');
const taskText=document.querySelector('.taskdescription')
const currTasks=document.querySelector('.tasks')
const completeTasks=document.querySelector('.completedtasksarea')


//adding of tasks
taskAdderBtn.addEventListener('click', function(e){
  const task=taskText.value
  currTasks.innerHTML=currTasks.innerHTML+`<div class="addedtasks"><input type="checkbox" name="" class="completetask" value="${task}"> ${task}</div>`
})

//completion of tasks
const completeButton=document.querySelector('.completetask')
currTasks.addEventListener('click', function(e){
  if(e.target.classList.contains('completetask')) {
    const task=e.target.value
    console.log(task)

    // Move the task to the completed tasks area
    completeTasks.innerHTML += `<div class="completedtask">${task}</div>`

    // Remove the task from the current tasks area
    e.target.parentElement.remove()
  }
})
