const router = require("express").Router();
const { PostObject } = require('../../models');
const authurizeLog = require("../../views/utils/auth");

//creating a new post with user id 
router.post('/' , async (req, res) => {
    try { console.log(req.body)
      const newPost = await PostObject.create({
        ...req.body,
        // user_id: req.session.user_id,
      });
      console.log(newPost)
      res.status(200).json(newPost);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });
  //making a delete post wuth the id and users id
  router.delete('/:id', authurizeLog, async (req, res) => {
    try {
      const postData = await postObject.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  //404 error and a message of no data is found
      if (!postData) {
        res.status(404).json({ message: 'No data found with this id!' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/',  async (req, res) => {
  try {
    const postData = await postObject.findAll();
    res.status(200).json(postData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});
  
  module.exports = router;

