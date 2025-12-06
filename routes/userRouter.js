const express = require('express');
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
    res.send(
        `<h1>Welcome to Panda</h1>
        <a href="/host/add-home">Go To Add Home</a>
        `
    );
})

module.exports = userRouter;
