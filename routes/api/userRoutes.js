//REquire express for router
const router = require('express').Router();

const {
  createUser,
  getUsers,
  getSingleUser,
  updateSingleUser,
  updateUser
} = require('../../controllers/userController.js');

//path to get all users or create new one
router.route('/').get(getUsers)
.post(createUser);

//path to get/put(update)/or delete user
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

//path to post(add friend) /delete
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);


//Exports Router
module.exports = router;