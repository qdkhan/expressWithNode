const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')
const hostRouter = require('./routes/hostRouter')

app.use((req, res, next) => {
    console.log(`The current URL is  ${req.url} and the Current method is ${req.method}`)
    next()
})

app.use(express.urlencoded({ extended: true }))
app.use("/", userRouter)
app.use("/host", hostRouter)

module.exports = app;