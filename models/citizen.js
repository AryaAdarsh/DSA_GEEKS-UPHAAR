const mongoose = require("mongoose");

const citizenSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique : true
    },
    phone : {
        type: String
    },
    cname : {
        type: String
    }

})

const CitizenData = new mongoose.model("CitizenData",citizenSchema);
module.exports = CitizenData;