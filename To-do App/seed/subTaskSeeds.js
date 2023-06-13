const db = require('../db')
const { Subtask } = require('../models')
const { Task } = require('../models')



const main = async () => {

  const taskOne = await Task.findOne({ name: 'Plan BBQ'})
  const taskTwo = await Task.findOne({ name: 'Buy Groceries'})
  const taskThree = await Task.findOne({ name: 'Pack Bags'})
  const taskFour = await Task.findOne({ name: 'Project 2'})
  const taskFive = await Task.findOne({ name: `Buy Father's Day Gift`})

    const subtask1 = new Subtask({
      name: 'Prep Meats and Drinks',
      isCompleted: false,
      nameOfTask: taskOne._id
    })
    await subtask1.save()

    const subtask2 = new Subtask({
      name: 'Buy Ice',
      isCompleted: false,
      nameOfTask: taskOne._id
    })
    await subtask2.save()
    
    const subtask3 = new Subtask({
      name: 'Charge and Set Up Speakers',
      isCompleted: false,
      nameOfTask: taskOne._id
    })
    await subtask3.save()

    const subtask4 = new Subtask({
      name: 'Buy Charcoal and Lighter Fluid',
      isCompleted: false,
      nameOfTask: taskOne._id
    })
    await subtask4.save()

    const subtask5 = new Subtask({
      name: 'Get Plates, Cups, and Cutlery',
      isCompleted: false,
      nameOfTask: taskOne._id
    })
    await subtask5.save()

    const subtask6 = new Subtask({
      name: 'Buy Meats for BBQ',
      isCompleted: false,
      nameOfTask: taskTwo._id
    })
    await subtask6.save()

    const subtask7 = new Subtask({
      name: 'Buy Drinks, Beer, Soda',
      isCompleted: false,
      nameOfTask: taskTwo._id
    })
    await subtask7.save()

    const subtask8 = new Subtask({
      name: 'Buy Dogfood',
      isCompleted: false,
      nameOfTask: taskTwo._id
    })
    await subtask8.save()

    const subtask9 = new Subtask({
      name: 'Buy Cereal and Milk',
      isCompleted: false,
      nameOfTask: taskTwo._id
    })
    await subtask9.save()

    const subtask10 = new Subtask({
      name: 'Pack Shirts and Pants',
      isCompleted: false,
      nameOfTask: taskThree._id
    })
    await subtask10.save()

    const subtask11 = new Subtask({
      name: 'Pack Socks and Undies',
      isCompleted: false,
      nameOfTask: taskThree._id
    })
    await subtask11.save()

    const subtask12 = new Subtask({
      name: 'Pack Toothbrush and Deoderant',
      isCompleted: false,
      nameOfTask: taskThree._id
    })
    await subtask12.save()

    const subtask13 = new Subtask({
      name: 'Pack Phone Charger',
      isCompleted: false,
      nameOfTask: taskThree._id
    })
    await subtask13.save()

    const subtask14 = new Subtask({
      name: 'Trello',
      isCompleted: false,
      nameOfTask: taskFour._id
    })
    await subtask14.save()

    const subtask15 = new Subtask({
      name: 'Wireframe',
      isCompleted: false,
      nameOfTask: taskFour._id
    })
    await subtask15.save()

    const subtask16 = new Subtask({
      name: 'ERD',
      isCompleted: false,
      nameOfTask: taskFour._id
    })
    await subtask16.save()
      
}

const run = async() => {
    await main()
    db.close()
}
run()
