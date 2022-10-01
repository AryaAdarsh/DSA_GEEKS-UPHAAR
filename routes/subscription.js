var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");
const SubscriberData = require("../models/subscribe");
require("../db/conn1")

/*router.get('/', (req, res) => {
    res.render('subscription');
});*/

router.post('/', async (req, res) => {
    console.log(req.body);

    try {
        const register = new SubscriberData({
            email: req.body.email
        })

        console.log("Hiii");
        const registered = await register.save();

        /*let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        })

        let mailOptions = {
            from: process.env.USER,
            to: req.body.email,
            subject: 'Welcome to Jhatkaa🎉 !!!',
            text: `Greetings, Welcome to the fam. Thank you for subscribing.`
        }

        transporter.sendMail(mailOptions, (err, data) =>{
            if(err)
            console.log(err);
            else
            console.log("Email sent!!");
        })*/
        
        res.redirect("/");
        res.status(201);
    } catch (err) {
        //alert("Enter correct credentials.");
        //res.status(400).send(err);
        console.log(err);
    }
});

module.exports = router;