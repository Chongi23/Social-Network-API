const router = require('express').Router();

//Requires for thoughts/reactions methods
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,

} = require('../../controllers/thoughtsController.js');

router.route('/')
.get(getThoughts)
.post(createThought);

router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions')
    .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
   .delete(deleteReaction);



//.Export router
module.exports = router;