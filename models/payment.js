const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt =  require("jsonwebtoken");
const { Int32 } = require("mongodb");

const paymentSchema = new mongoose.Schema({
    id : {
        type: String,
        required: true,
        unique : true
    },
    amount: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    }

})

const PaymentData = new mongoose.model("PaymentData",paymentSchema);
module.exports = PaymentData;