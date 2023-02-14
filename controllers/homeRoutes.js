const router = require("express").Router();
const { homePage } = require('../models/');

router.get("/", async (req, res) => {
  try {

    res.render('homepage');
  
  } catch (err) {
    console.log (err);
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  console.log("inside sign up")
    try {
  
      res.render('signup');
    
    } catch (err) {
      console.log (err);
      res.status(500).json(err);
    }
  });

module.exports = router;
