const db = require('../db')
const { Task, SubTask } = require("../models")





const main = async () => {

    const taskOne = await Task.find({ name: 'Plan BBQ'})
    const taskTwo = await Task.find({ name: 'Buy Groceries'})
    const taskThree = await Task.find({ name: 'Pack Bags'})
    const taskFour = await Task.find({ name: 'Project 2'})
    const taskFive = await Task.find({ name: `Buy Father's Day Gift`})

    const subTask1 =  new SubTask({
      name: 'Prep Meats and Drinks',
      isComplete: false,
      nameOfTask: taskOne._id
    })
    await subTask1.save()

    const subTask2 =  new SubTask({
      name: 'Buy Ice',
      isComplete: false,
      nameOfTask: taskOne._id
    })
    await subTask2.save()
    
    const subTask3 =  new SubTask({
      name: 'Charge and Set Up Speakers',
      isComplete: false,
      nameOfTask: taskOne._id
    })
    await subTask3.save()

    const subTask4 =  new SubTask({
      name: 'Buy Charcoal and Lighter Fluid',
      isComplete: false,
      nameOfTask: taskOne._id
    })
    await subTask4.save()

    const subTask5 =  new SubTask({
      name: 'Get Plates, Cups, and Cutlery',
      isComplete: false,
      nameOfTask: taskOne._id
    })
    await subTask5.save()

    const subTask6 =  new SubTask({
      name: 'Buy Meats for BBQ',
      isComplete: false,
      nameOfTask: taskTwo._id
    })
    await subTask6.save()

    const subTask7 =  new SubTask({
      name: 'Buy Drinks, Beer, Soda',
      isComplete: false,
      nameOfTask: taskTwo._id
    })
    await subTask7.save()

    const subTask8 =  new SubTask({
      name: 'Buy Dogfood',
      isComplete: false,
      nameOfTask: taskTwo._id
    })
    await subTask8.save()

    const subTask9 =  new SubTask({
      name: 'Buy Cereal and Milk',
      isComplete: false,
      nameOfTask: taskTwo._id
    })
    await subTask9.save()

    const subTask10 =  new SubTask({
      name: 'Pack Shirts and Pants',
      isComplete: false,
      nameOfTask: taskThree._id
    })
    await subTask10.save()

    const subTask11 =  new SubTask({
      name: 'Pack Socks and Undies',
      isComplete: false,
      nameOfTask: taskThree._id
    })
    await subTask11.save()

    const subTask12 =  new SubTask({
      name: 'Pack Toothbrush and Deoderant',
      isComplete: false,
      nameOfTask: taskThree._id
    })
    await subTask12.save()

    const subTask13 =  new SubTask({
      name: 'Pack Phone Charger',
      isComplete: false,
      nameOfTask: taskThree._id
    })
    await subTask13.save()

    const subTask14 =  new SubTask({
      name: 'Trello',
      isComplete: false,
      nameOfTask: taskFour._id
    })
    await subTask14.save()

    const subTask15 =  new SubTask({
      name: 'Wireframe',
      isComplete: false,
      nameOfTask: taskFour._id
    })
    await subTask15.save()

    const subTask16 =  new SubTask({
      name: 'ERD',
      isComplete: false,
      nameOfTask: taskFour._id
    })
    await subTask16.save()
      
}

const run = async() => {
    await main()
    db.close()
}
run()
