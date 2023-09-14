const router = require('express').Router();

//Requires for thoughts/reactions methods
const {
  
  getThoughts,
  getSingleThoughts,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction,

} = require('../../controllers/thoughtsController.js');

router.route('/')
.get(getThoughts)
.post(createThoughts);

router.route('/:thoughtId')
    .get(getSingleThoughts)
    .put(updateThoughts)
    .delete(deleteThoughts);

router.route('/:thoughtId/reactions')
    .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);



//.Export router
module.exports = router;