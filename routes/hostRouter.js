const express = require('express')
const hostRouter = express.Router()
// const rootDir = require('../utils/pathUtil')
const path = require('path')

hostRouter.get("/add-home", (req, res, next) => {
    // res.send(
    //     `<h2>Registration Form</h2>
    //     <form method="post" action="/host/add-home">
    //         <input type="text" name="name" pkaceholder="Add Name">
    //         <br/>
    //         <input type="submit" value="Submit">
    //     </form>
    //     `
    // );

    res.sendFile(path.join(__dirname, '../views', 'AddHome.html'));
    // res.sendFile(path.join(rootDir, 'views', 'AddHome.html'));
    
})

hostRouter.post("/add-home", (req, res, next) => {
    console.log("Filled Data is ====> ", req.body)
    // res.send(
    //     `<h3>Form Filled Successfully</h3>
    //     <a href="/">Go To Home</a>` 
    // );

    res.sendFile(path.join(__dirname, '../views', 'FilledData.html'));
    // res.sendFile(path.join(rootDir, 'views', 'FilledData.html'));
})

module.exports = hostRouter