const { User, Thoughts } = require("../models");

//export User methods
module.exports = {
  //get  users
  async getUsers(req, res) {
    try {
      console.log("words");
      const users = await User.find().populate("friends").populate("thoughts");
      res.json(users);
      console.log(users);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err });
    }
  },

  //Get single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select("-__v")
        .populate("friends")
        .populate("thoughts");

      if (!user) {
        return res.status(404).json({ message: "No user found with that ID" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create new user
  async createNewUser(req, res) {
    User.create(req.body)
      .then((userData) => {
        res.json(userData);
      })
      .catch((err) => res.status(500).json(err));
    // try {
    //   const user = await User.create(req.body);
    //   res.json(user);

    //   } catch (err) {
    //    // res.status(500).json(err);
    //    console.log(err)
    //   }
  },

  //Update user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: "No user with that ID" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json(err);
    }
  },

  //Delete User
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "No User with this id!" });
      }
      await Thoughts.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: "User successfully deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Add Friend

  async addFriend(req, res) {
    try {
      //console.log(req.params, "req.params")
       const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "no users found" });
      }
      console.log(user, "user");
      res.json(user);
    } catch (err) {
      console.log(err, "err");
      res.status(500).json(err);
    }
  },

  // Remove friend
  async deleteFriend(req, res) {
    console.log("hello");
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );
      console.log(user);

      if (!user) {
        return res.status(404).json({ message: "No user with this id!" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
