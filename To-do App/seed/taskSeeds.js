const db = require('../db')
const { User, Task } = require("../models")


const main = async () => {

  const userOne = await User.find({ username: 'Bryan'})

    const task1 =  new Task({
        name: 'Plan BBQ',
        dueDate: 'Sunday June 17th',
        isCompleted: false,
        nameOfUser: userOne._id
      })
    await task1.save()
      
    const task2 =  new Task({
      name: 'Buy Groceries',
      dueDate: 'Friday June 15th',
      isCompleted: true,
      nameOfUser: userOne._id
    })
    await task2.save()

    const task3 =  new Task({
        name: 'Pack Bags',
        dueDate: 'Wednesday August 2nd',
        isCompleted: false,
        nameOfUser: userOne._id
      })
    await task3.save()

    const task4 =  new Task({
        name: 'Project 2',
        dueDate: 'Friday June 16th',
        isCompleted: false,
        nameOfUser: userOne._id
      })
    await task4.save()

    const task5 =  new Task({
        name: `Buy Father's Day Gift`,
        dueDate: 'Friday June 16th',
        isCompleted: false,
        nameOfUser: userOne._id
      })
    await task5.save()
}

const run = async() => {
  await main()
  db.close()
}
run()

