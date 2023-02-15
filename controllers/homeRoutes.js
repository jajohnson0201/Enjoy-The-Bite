const router = require("express").Router();
const { Review, User} = require('../models');
const authurizeLog = require('../utils/auth');

router.get("/", async (req, res) => {
  try {
    const reviews = 


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
