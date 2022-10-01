var express = require('express');
var router = express.Router();
require('dotenv').config();
require("../db/conn1")
var Publishable_Key = process.env.PK
var Secret_Key = process.env.SK
const stripe = require('stripe')(Secret_Key)
const PaymentData = require("../models/payment");

router.get('/', function (req, res) {
    res.render('home', {
        key: Publishable_Key
    })
})

router.post('/', async (req, res)  => {

    // Moreover you can take more details from user
    // like Address, Name, etc from form
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 2000,
        currency: 'usd',
        payment_method_types: ['card'],
    });
    const id = paymentIntent.id;
    const amount = paymentIntent.amount;
    const currency = paymentIntent.currency;
    
    try {
        const register = new PaymentData({
            id: id,
            amount: amount,
            currency: currency
        })

        console.log("Hiii");
        const registered = await register.save();
        res.redirect('/payment');
        res.status(201);
    } catch (err) {
        //alert("Enter correct credentials.");
        //res.status(400).send(err);
        console.log(err);
    }
    /*stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
        name: 'Jhatkaa C4G',
        address: {
            line1: 'TC 9/4 Old MES colony',
            postal_code: '110092',
            city: 'New Delhi',
            state: 'Delhi',
            country: 'India',
        }
    })
    .then((customer) => {
 
        return stripe.PaymentIntent.create({
            amount: 7000,    // Charing Rs 25
            description: 'Web Development Product',
            currency: 'USD',
            customer: customer.id
        });
    })
    .then((charge) => {
        console.log("Success");
        res.send("Success") // If no error occurs
    })
    .catch((err) => {
        res.send(err)    // If some error occurs
    });*/
})
module.exports = router;