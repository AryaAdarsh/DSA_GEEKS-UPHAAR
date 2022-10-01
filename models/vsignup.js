const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt =  require("jsonwebtoken");

const volunteerSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique : true
    },
    psw : {
        type: String,
        required: true
    }
})

//instance method
volunteerSchema.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({_id: this._id.toString()}, process.env.SECRET_KEY);
        return token;
    }catch(err){
        console.log(err);
    }
}

volunteerSchema.pre("save", async function(next){
    //password hash bcrypt 10 rounds
    //const passwordHash = await bcrypt.hash(this.psw, 10);
    console.log(this.psw);
    this.psw = await bcrypt.hash(this.psw, 10);
    next();
})

const VolunteerData = new mongoose.model("VolunteerData",volunteerSchema);
module.exports = VolunteerData;