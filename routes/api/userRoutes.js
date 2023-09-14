//REquire express for router
const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createNewUser,
  updateUser
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers)
.post(createNewUser);

// /api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
//.delete(deleteUser);

//path to post(add friend) /delete
router.route('/:userId/friends/:friendId')
//.post(addFriend)
//.delete(deleteFriend);


//Exports Router
module.exports = router;