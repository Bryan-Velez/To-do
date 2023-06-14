

const addTask = document.getElementById('addTaskBtn')
const editTask = document.querySelector('.editBtn')
const deleteTask = document.querySelector('.delBtn')
const task1Input = document.getElementById('task1')
const inputTask = 

const getData = async () => {
    try {
        const response = await axios.get('http://localhost:3001/tasks')
        const data = response.data;
        console.log.(data)
        renderData(data)
    } catch (e) {
        console.e.('Error:', e.message)
    }
}

const renderData = (data) => {
    const taskContainer = document.getElementById('taskContainer')
    // taskContainer.innerHTML = ''
    const taskList = document.getElementById('taskList')
    data.forEach((item) => {
        const task = document.getElementByClassName('task')
        task.textContent = item
        taskList.appendChild(task)
    })
}

getData()




addTask.addEventListener('click', async() => {
    const task1Data = 
    const res = await axios.post('http://localhost:3001/tasks',)
    console.log(res.data);
})

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