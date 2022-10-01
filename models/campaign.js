const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    date : {
        type: String,
        required: true
    },
    signature : {
        type: String,
        required: true
    },
    desc : {
        type: String,
        required: true
    },
    skills : {
        type: String,
        required: true
    }
})

const CampaignData = new mongoose.model("CampaignData",campaignSchema);
module.exports = CampaignData;