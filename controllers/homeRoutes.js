const router = require("express").Router();
const { Review, User} = require('../models');
const authurizeLog = require('../utils/auth');

router.get("/", async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      include: [
        {model: User, attributes: ['userName']},
      ],
    });

    const reviews = reviewData.map((review) => review.get({ plain: true}));

    res.render('homepage', {
      reviews,
     logged_in: req.session.logged_in
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', authurizeLog, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Review }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
