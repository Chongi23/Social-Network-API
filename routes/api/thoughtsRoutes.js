const router = require('express').Router();

//Requires for thoughts/reactions methods
const {
  createThoughts,
  getAllThoughts,
  getSingleThoughts,
  updateThoughts,
  deleteThoughts,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtsController');

router.route('/').get(getAllThoughts);

router.route('/:userId').post(createThoughts);

router.route('/:thoughtId').get(getSingleThoughts).put(updateThoughts);

router.route('/:thoughtId/users/:userId').delete(deleteThoughts);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

//.Export router
module.exports = router;