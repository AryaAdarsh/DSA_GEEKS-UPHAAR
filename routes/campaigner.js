var express = require('express');
var router = express.Router();
require("../db/conn1")
const bcrypt = require("bcryptjs");
//var {run} = require("../db/connfetch")
const VolunteerData = require("../models/vsignup");
const CampaignData = require("../models/campaign");

router.get('/', (req, res) => {
  res.render('campaigner');
});


router.post('/', async (req, res) => {
    console.log(req.body);
    try {
      const campid = ['camp1@gmail.com','camp2@gmail.com', 'camp3@gmail.com']
      const pass = "abcd";
      const email = String(req.body.email);
      const psw = String(req.body.psw);
      console.log(req.body.email);
      console.log(psw=='abcd');
      var isMatch = 0;
      const useremail =campid.indexOf(email);
      console.log(useremail);
      if(useremail>-1){
          if(psw=='abcd'){
              isMatch = 1;
          }
    }
      console.log(isMatch);

      var camps = await CampaignData.find({});
      camps = JSON.stringify(camps);
      console.log(camps);
      
      if (isMatch) {
        /*camps.exec((err, data) => {
          if (err) throw err;
          res.render("campaign-dashboard", {
              camps: data,
              email: email
          })
        })*/
        res.render("campaign-dashboard", {email});
      }
      else {
        //res.send("Invalid credentialss");
        //res.json({message: "Invalid credetianls"});
        res.redirect("/campaigner", {
          message: "Invalid credentials, try again"
        })
      }
    } catch (err) {
      //console.log(Hi);
      res.status(400).send("Invalid credentials");
    }
    /*try {
      const email = req.body.email;
      const psw = req.body.psw;
      //const useremail = run();
  
      /*const useremail = () => {
        return await run();
        //console.log("HIIIIIII plz print");
        //console.log(res);
      }
      console.log(useremail());*/

      /*setTimeout(() => {
        console.log(useremail);
        if(useremail.psw === psw)
        isMatch = true;
        else
        isMatch = false;
  
        if (!isMatch) console.log("Not matched");
  
        if (isMatch) {
          res.render("/volunteer-dashboard",{email, psw});
        }
        else {
          res.redirect("/volunteer");
        }
      }, 2000);
      res.redirect("/volunteer");
    } catch (err) {
      res.status(400).send("Invalid credentials");
    }*/
  });
  
  module.exports = router;