const { User, Thoughts } = require('../models');

//Export methods for thoughts

module.exports = {
  //Get all thoughts
 async getThoughts(req, res) {
   try {
    const thoughts = await Thoughts.find();
    res.json(thoughts);
   } catch (err) {
    res.status(500).json(err);
   }
  },

  //Get single thought 
  
  async getSingleThought(req, res) {
   try {
    const thought = await Thoughts.findOne({_id: req.params.thoughtId});
    if (!comment) {
      return res.status(404).json({ message: 'No thought found with that ID'});
    }
    res.json(thought);
   } catch (err) {
    res.status(500).json(err);
   }
  },
  
  // Create new thought
  
 async createThought(req, res) {
  try {
    const thought = await Thoughts.create(req.body);
    const user = await User.findOneAndUpdate(
      { _id : req.body._userId}, 
      {$push:{thoughts: thought}},
       {new: true}
        );
  if (!user) {
    return res.status(404)
    .json({ message: 'thought created, but no users with this ID'});
  }
  res.json({ message: 'thought created'})
  }  catch (err) {
    console.error(err);
  }
   
  },

  //update an existing thought using Id
  
 async updateThought(req, res) {
    try {
      const thought = await Thoughts.findOneAndUpdate(
        { _id : req.params.thoughtId}, 
        {$set: req.body }, 
        {runValidators: true, new:true} 
        );

        if (!thought) {
          res.status(404).json({ message : 'No thought with that ID'});
        }
        res.json(thought);
        } 
        catch (error) {
          res.status(500).json(err);
        }
      },
  
  //Delete thought using Id
  
 async deleteThought(req, res) {
  try {
    const thought = await Thoughts.findOneAndRemove({ _id: req.params.thoughtId });

    if (!thought) {
      return res.status(404).json({ message: 'No thought with this id!' });
    }

    const user = await User.findOneAndUpdate(
      { thought: req.params.thoughtId },
      { $pull: { thought: req.params.thoughtId } },
      { new: true }
    );

    if (!user) {
      return res
        .status(404)
        .json({ message: 'Thought created but no user with this id!' });
    }

    res.json({ message: 'Thought successfully deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
},

  //Add reaction
  
async addReaction(req, res) {
  try {
    const thought = await Thoughts.fineOneAndUpdate(
      {_id: req.params.thoughtId},
      {$addToSet: { reactions:req.body }},
      { runValidators: true, new: true }
    );
    if(!thought){
      return  res.status(404).json ({message:'no thoughts found'})
    }
res.json(thought);

   } catch (err) {
    res.status(500).json(err);
   }
},
  
 // Remove response
 async deleteReaction(req, res) {
  try {
    const thought = await Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )

    if (!thought) {
      return res.status(404).json({ message: 'No thought with this id!' });
    }

    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
},
};

