const router = require('express').Router();

//Requires for thoughts/reactions methods
const {
  
  getThoughts

} = require('../../controllers/thoughtsController.js');

router.route('/').get(getThoughts)



//.Export router
module.exports = router;