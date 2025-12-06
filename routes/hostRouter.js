const express = require('express')
const hostRouter = express.Router()

hostRouter.get("/add-home", (req, res, next) => {
    res.send(
        `<h2>Registration Form</h2>
        <form method="post" action="/host/add-home">
            <input type="text" name="name" pkaceholder="Add Name">
            <br/>
            <input type="submit" value="Submit">
        </form>
        `
    );
})

hostRouter.post("/add-home", (req, res, next) => {
    console.log("Filled Data is ====> ", req.body)
    res.send(
        `<h3>Form Filled Successfully</h3>
        <a href="/">Go To Home</a>` 
    );
})

module.exports = hostRouter