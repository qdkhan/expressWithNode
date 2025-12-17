const express = require('express')
const path = require('path')
const app = express()
const userRouter = require('./routes/userRouter')
const hostRouter = require('./routes/hostRouter')
const rootDir = require('./utils/pathUtil')

app.use((req, res, next) => {
    console.log(`The current URL is  ${req.url} and the Current method is ${req.method}`)
    next()
})

app.use(express.urlencoded({ extended: true }))
app.use("/", userRouter)
app.use("/host", hostRouter)
app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, '/views', '404.html'));
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

module.exports = app;