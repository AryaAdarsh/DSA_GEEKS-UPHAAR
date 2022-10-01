var express = require('express');
var router = express.Router();
require("../db/conn1")
const bcrypt = require("bcryptjs");
//var {run} = require("../db/connfetch")
const VolunteerData = require("../models/vsignup");

router.get('/', (req, res) => {
  res.render('volunteer1');
});

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const email = req.body.email;
    const psw = req.body.psw;
    const useremail = await VolunteerData.findOne({ email: email });
    console.log(useremail);
    const isMatch = await bcrypt.compare(psw, useremail.psw);
    console.log(isMatch);
    /*if (!isMatch) console.log("Not matched");
    const token = await useremail.generateAuthToken();
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 5000000),
      httpOnly: true
    });*/
    //console.log(isMatch);
    if (isMatch) {
      res.render("vd", {email});
    }
    else {
      //res.send("Invalid credentialss");
      //res.json({message: "Invalid credetianls"});
      res.redirect("/volunteer", {
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
