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

//api/thoughts
router.route('/')
.get(getThoughts)
.post(createThought);

//api/thoughts/:id
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
   .delete(deleteReaction);



//.Export router
module.exports = router;