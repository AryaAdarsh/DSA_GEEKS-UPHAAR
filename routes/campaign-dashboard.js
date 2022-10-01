var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
const CampaignData = require("../models/campaign");

router.get('/', function (req, res, next) {
  res.render('campaign-dashboard');
});

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const register = new CampaignData({
      name: req.body.name,
      date: req.body.date,
      signature: req.body.signature,
      desc: req.body.desc,
      skills: "Video Editing",
    })

    //const token = await register.generateAuthToken();
    console.log("Hiii");
    const registered = await register.save();
    res.redirect("/campaign-dashboard");
    res.status(201);
  } catch (err) {
    //alert("Enter correct credentials.");
    //res.status(400).send(err);
    console.log(err);
  }
});

module.exports = router;
