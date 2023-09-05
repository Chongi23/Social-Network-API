//REquire express for router
const router = require('express').Router();
//REquires for User/FRiend methods
const {
  createUser,
  getUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateSingleUser).delete(deleteSingleUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)


//Exports Router
module.exports = router;