

const addTask = document.getElementById('addTaskBtn')
const editTask = document.querySelector('.editBtn')
const deleteTask = document.querySelector('.delBtn')
const inputTask =



addTask.addEventListener('click',async() => {
    const res = await axios.post('http://localhost:3001/tasks',)

    console.log(res.data);
})

editTask.addEventListener('click',async() => {
    // const taskId = 
    const res = await axios.put(`http://localhost:3001/tasks/${taskId}`)
    console.log(res.data);
})

deleteTask.addEventListener('click',async() => {
    // const taskId =
    const res = await axios.delete(`http://localhost:3001/tasks/${taskId}`)
    console.log(res.data);
})