const router = require("express").Router();
const { postObject } = require('../../models');
const authurizeLog = require("../../views/utils/auth");


router.post('/', authurizeLog , async (req, res) => {
    try {
      const newPost = await postObject.create({
        ...req.body,
        user_id: req.session.user_id,
  
      });
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  router.delete('/:id', authurizeLog, async (req, res) => {
    try {
      const postData = await postObjec.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!posttData) {
        res.status(404).json({ message: 'No data found with this id!' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
  module.exports = router;

