const { Video } = require("../models")
const fs = require("fs")
const path = require('path')
const router = require("express").Router()

//Hit this route to fill your database with all the dance movement files!
router.post("/fill", (req, res) => {
    fs.readdirSync(path.join(__dirname, "../../dancemovment/")).forEach(async file => {
        try {
            await Video.create({videoname: file})
        } catch (error) {
            console.log(error)
        }
    })
})

module.exports = router