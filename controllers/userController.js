const { User,  Thoughts } = require('../models');


//export User methods 
module.exports = {

  //get  users
  async getUsers(req, res) {
   try {
    const users = await User.find();
    res.json(users);
    } catch (err) {
      res.status(500).json({err});
   }
  },
  
  //Get single user by Id
 async getSingleUser(req, res) {
   try {
    const user = await User.findOne({_id: req.params.userId });
    if(!user) {
      return res.status(404).json({message:'No user found with that ID'});
    }
    res.json(user);
  }
    catch(err) {
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

  async updateUser(req, res) {
    try {
      const user = await findOneAndUpdate(
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
      }
    };
    
    
 