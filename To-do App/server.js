const express = require('express')
const cors = require ('cors')
const db = require('./db')
const PORT = process.env.PORT || 3001
const appRouter = require('./routes/AppRouter')
const bodyParser = require('body-parser')
const { User, Task, SubTask } = require('./models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())


app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})


app.get('/', (req, res) => {
    res.send('Hello, World!!!');
  })

app.use('/', appRouter)
