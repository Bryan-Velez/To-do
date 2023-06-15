

const addTask = document.getElementById('addTaskBtn')
const editTask = document.querySelector('.editBtn')
const deleteTask = document.querySelector('.delBtn')
const taskList = document.getElementById('taskList')
const taskInput = document.querySelector('#taskInput')

// const taskInput = 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grabbing user Data from DB


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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grabbing and setting task Data from DB


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
        tasks.forEach(task => {
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
    // taskLine.textContent = newTask.value
    

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.name = 'taskFinished'
    taskLine.insertBefore(checkbox, taskLine.firstChild)

    const editButton = document.createElement('button')
    editButton.className = 'editBtn'
    editButton.textContent = 'Edit'
    taskLine.appendChild(editButton)

    const deleteButton = document.createElement('button')
    deleteButton.className = 'delBtn'
    deleteButton.textContent = 'Del'

    taskLine.appendChild(deleteButton)

    taskList.appendChild(taskLine)
    return taskLine
}

getTaskData()


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Creating tasks

addTask.addEventListener('click', async() => {
    const taskName = taskInput.value
    console.log(taskName)
    try {
        const response = await axios.post('http://localhost:3001/tasks', { name: taskName})
        const newTask = response.data
        taskLine = renderTask(newTask)
        taskList.appendChild(newTask)
        console.log(newTask)
        taskInput.value = ''
    } catch (e) {
        console.log('Error:', e.message)
    }
    
    
})




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grabbing Subtask Data from DB


// const getSubtaskData = async () => {
//     try {
//         const response = await axios.get('http://localhost:3001/subtasks')
//         const subtasks = response.data
//         console.log(subtasks)
//         const getSubtasks = subtasks.map(subtask => {
//             return `<li>${subtask.name}</li>`
//         }).join('')
//         document.getElementById('getSubtasks').innerHTML = getSubtasks
//     } catch (e) {
//         console.log('Error:', e.message)
//     }
// }

// getSubtaskData()






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grabbing and displaying Subtask in Modal 


taskList.addEventListener('click', (event) => {
    const clickedTask = event.target.closest()
    if (!clickedTask) return

    const taskId = clickedTask.dataset.taskId
    displayModal(taskId)
})

const displayModal = async (taskId) => {

    try {
        const response = await axios.get(`http://localhost:3001/subtasks/${taskId}`)
        const subtasks = response.data
        console.log(subtasks)

        const subtaskList = subtasks.map(subtask => `<li>${subtask.name}</li>`).join('')
        document.getElementById('subtaskList').innerHTML = subtaskList

        const modal = document.getElementById('subtaskModal')
        modal.style.display = 'block'
        
        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
        }

        modal.addEventListener('click',(event) => {
            if (e.target.classList.contains('close') || event.target === modal) {
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