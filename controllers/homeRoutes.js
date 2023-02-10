const router = require("express").Router();
const { homePage } = require('../models/');

router.get("/", async (req, res) => {
  try {

    res.render('homepage');
  
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
    try {
  
      res.render('signup');
    
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
