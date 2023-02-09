const router = require('express').Router();
const { User } = require('../../models');

// Creats a new account 
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.bdoy);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        })
    } catch (err) {
        res.status(400).json(err);
    }
});

//logs user in if the already have an account
router.post('/login', async (req, res) => {
    try {
        //checks to see if email exisits in the db
        const userData = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password' });
            return;
        }

        //checks to see if password matches the the corresponding emails password
        const vaildPassword = await userData.checkPassword(req.body.password);

        if (!vaildPassword) {
            res.status(400).json({ message: 'Incorrect email or password' });
            return;
        }

        //signs user into a session.
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' })
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {

    if(req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;