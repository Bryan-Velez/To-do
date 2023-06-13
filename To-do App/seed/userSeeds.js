const db = require('../db')
const { User } = require("../models")


const main = async () => {
    const user1 = new User({
      username: 'Bryan',
      password: 'ilikecookies'
    })
    await user1.save()
}

const run = async() => {
    await main()
    db.close()
}
run()