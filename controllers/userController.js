const  User  = require('../models/User');


//export User methods 
module.exports = {
//get  users
  async getUsers(req, res) {
   try {
    console.log("words");
    const users = await User.find();
    res.json(users);
    console.log(users)
    } catch (err) {
      console.log(err)
      res.status(500).json({err});
   }
  },
  
  //Get single user 
 async getSingleUser(req, res) {
   try {
    const user = await User.findOne({_id: req.params.userId })
    .select('-__v');

    if(!user) {
      return res.status(404).json({message:'No user found with that ID'});
    }
    res.json(user);
 
  } catch(err) {
      res.status(500).json(err);
    }
    
  },
  
  // Create new user
  async createNewUser(req,res) {

    try {
      const user = await User.create(req.body);
      res.json(user);

      } catch (err) {
        res.status(500).json(err);
      }
    },

    //Update user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id : req.params.userId}, 
        {$set: req.body }, 
        {runValidators: true, new:true} 
        );

        if (!user) {
          res.status(404).json({ message : 'No user with that ID'});
        }
        res.json(user);
        } 
        catch (error) {
          res.status(500).json(err);
        }
      },
     
 async deleteUser(req, res) {
  try {
    const user = await User.findOneAndRemove(
      { _id: req.params.userId },
      {$set: req.body },
      { runValidators: true }
      );

    if (!user) {
      return res.status(404).json({ message: 'No User with this id!' });
    }
    res.json({ message: 'User successfully deleted!' });
    
  } catch (err) {
    res.status(500).json(err);
  }
}
};
    
    
 