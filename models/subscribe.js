const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt =  require("jsonwebtoken");

const subscriberSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique : true
    }
})

const SubscriberData = new mongoose.model("SubscriberData",subscriberSchema);
module.exports = SubscriberData;