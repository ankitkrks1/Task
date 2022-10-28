const express = require('express')
//DB connection
require('./DB/mongoose')
const port = process.env.PORT || 3000 // this will get port according to env

const userRouter = require('./Router/userRouter')

const app = express()

app.use(express.json()) // Middleware to handle json data

app.use(userRouter)


app.listen(port,()=>{
    console.log(`Server is Running in port : ${port}`)
})
