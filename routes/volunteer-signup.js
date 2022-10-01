var express = require('express');
var router = express.Router();
//var {run} = require("../db/conn")
require("../db/conn1")
const bcrypt = require("bcryptjs");
const VolunteerData = require("../models/vsignup");

router.get('/', (req, res) => {
    res.render('volunteer1');
});

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const register = new VolunteerData({
            email: req.body.email,
            psw: req.body.password
        })

        //const token = await register.generateAuthToken();
        console.log("Hiii");
        const registered = await register.save();
        res.redirect("/volunteer");
        res.status(201);
    } catch (err) {
        //alert("Enter correct credentials.");
        //res.status(400).send(err);
        console.log(err);
    }
});

module.exports = router;

