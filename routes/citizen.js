var express = require('express');
var router = express.Router();
const CitizenData = require("../models/citizen");
/*router.get('/', (req, res) => {
    res.render('citizen');
});*/

router.post('/', async (req, res) => {
    console.log(req.body);

    try {
        const register = new CitizenData({
            email: req.body.email,
            phone: req.body.phone,
            cname: "Demand Ministry of Social Justice and Empowerment to roll back new revisions to the National Overseas Scholarship scheme"
        })

        console.log("Hiii");
        const registered = await register.save();
        
        res.redirect("/cdetail");
        res.status(201);
    } catch (err) {
        //alert("Enter correct credentials.");
        //res.status(400).send(err);
        console.log(err);
    }
});

module.exports = router;