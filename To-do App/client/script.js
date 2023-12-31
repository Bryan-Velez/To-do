

const addTask = document.getElementById('addTaskBtn')
const editTask = document.querySelector('.editBtn')

const taskList = document.getElementById('taskList')
const taskInput = document.querySelector('#taskInput')

// const taskInput = 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Getting user Data from DB


const getUserData = async () => {
    try {
        const response = await axios.get('http://localhost:3001/users')
        const users = response.data
        console.log(users)
        const getUsers = users.map(user => {
            return `<h1>${user.username}</h1>`
        }).join('')
        document.getElementById('getUsers').innerHTML = getUsers
    } catch (e) {
        console.log('Error:', e.message)
    }
}

getUserData()


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Getting and setting task Data from DB


// const getTaskData = async () => {
//     try {
//         const response = await axios.get('http://localhost:3001/tasks')
//         const tasks = response.data
//         console.log(tasks)
//         // const getTasks = tasks.map(task => {
//         //     return `<li>${task.name}</li>`
//         // }).join('')
//         // document.getElementById('taskLine').innerHTML = getTasks
//         tasks.forEach(task => {
//             renderTask(task)
//           })  
//     } catch (e) {
//         console.log('Error:', e.message)
//     }
// }

// const renderTask = (task) => {
//     const taskLine = document.createElement('li')
//     taskLine.textContent = task.name
//     document.getElementById('taskList').appendChild(taskLine)
// }

// getTaskData()



const getTaskData = async () => {
    try {
        const response = await axios.get('http://localhost:3001/tasks')
        const tasks = response.data
        console.log(tasks)
        tasks.forEach((task) => {
            renderTask(task)
        })  
    } catch (e) {
        console.log('Error:', e.message)
    }
}





const renderTask = (task, newTask) => {
    const taskLine = document.createElement('li')
    taskLine.className = 'taskLine'
    taskLine.textContent = task.name
    taskLine.setAttribute('taskData-id', task._id)    

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.name = 'taskFinished'
    taskLine.insertBefore(checkbox, taskLine.firstChild)

    const subtaskButton = document.createElement('button')
    subtaskButton.className = 'subtaskBtn'
    subtaskButton.textContent = 'Subtasks'
    subtaskButton.addEventListener('click', () => {
        const taskId = taskLine.getAttribute('taskData-id')
        
            console.log(taskId)
    
        displayModal(taskId)
    })
    taskLine.appendChild(subtaskButton)

    const editButton = document.createElement('button')
    editButton.className = 'editBtn'
    editButton.textContent = 'Edit'
    taskLine.appendChild(editButton)

    const deleteButton = document.createElement('button')
    deleteButton.className = 'delBtn'
    deleteButton.textContent = 'Del'
    deleteButton.addEventListener('click', () => {
        const taskId = taskLine.getAttribute('taskData-id')
        deleteTask(taskId)
      })
    taskLine.appendChild(deleteButton)

    taskList.appendChild(taskLine)
    return taskLine
}

getTaskData()


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Creating Tasks

addTask.addEventListener('click', async() => {
    const taskName = taskInput.value
    console.log(taskName)
    try {
        const response = await axios.post('http://localhost:3001/tasks', { name: taskName, nameOfUser: "6487b02ca4fa6faa57208fd5", isCompleted: false })
        const newTask = response.data
        const taskLine = renderTask(newTask)
        taskList.appendChild(taskLine)
        console.log(newTask)
        taskInput.value = ''
    } catch (e) {
        console.log('Error:', e.message)
    }
    
})

taskInput.addEventListener("keyup",function(event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("addTaskBtn").click()
    }
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Deleting Tasks

const deleteTask = async (taskId) => {
    // const taskId =
    try {
        await axios.delete(`http://localhost:3001/tasks/${taskId}`)
        const taskLine = document.querySelector(`li[taskData-id="${taskId}"]`)
        
        if (taskLine) {
            taskLine.remove()
        }
    } catch (e) {
        console.log('Error:', e.message)
    }
    console.log(`${taskId}`)
}






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grabbing Subtask Data from DB


const getSubtaskData = async () => {
    try {
        const response = await axios.get('http://localhost:3001/subtasks')
        const subtasks = response.data
        console.log(subtasks)
        const getSubtasks = subtasks.map(subtask => {
            return `<li>${subtask.name}</li>`
        }).join('')
        document.getElementById('getSubtasks').innerHTML = getSubtasks
    } catch (e) {
        console.log('Error:', e.message)
    }
}

getSubtaskData()




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Getting and displaying Subtask in Modal 




const displayModal = async (taskId) => {

    try {
        const response = await axios.get(`http://localhost:3001/subtasks/tasks/${taskId}`)
        const subtasks = response.data
        console.log(subtasks)
        
        const subtaskList = subtasks.map(subtask => `<li>${subtask.name}</li>`).join('')
        const subtaskUL = document.getElementById('subtaskList')
        subtaskUL.innerHTML = subtaskList
        console.log(subtaskUL)


        const modal = document.getElementById('subtaskModal')
        modal.style.display = 'block'
        
        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none"
            }
        }

        modal.addEventListener('click',(event) => {
            if (event.target.classList.contains('close') || event.target === modal) {
                modal.style.display = 'none'
            }
        })
       
    } catch (e) {
        console.log('Error:', e.message)
    }
}







// editTask.addEventListener('click', async() => {
//     const taskId = event.target.closest('.task').dataset.taskid
//     const res = await axios.put(`http://localhost:3001/tasks/${taskId}`)
//     console.log(res.data);
// })

// deleteTask.addEventListener('click', async() => {
//     // const taskId =
//     const res = await axios.delete(`http://localhost:3001/tasks/${taskId}`)
//     console.log(res.data);
// })