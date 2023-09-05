const { User, Thoughts } = require('../models');

//Export methods for thoughts

module.exports = {
  //Get all thoughts
  getThoughts(req, res) {
    Thoughts.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  //Get single thought using Id params
  
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thoughtsText) =>
        !thoughtsText
          ? res.status(404).json({ message: "No thoughts with that ID" })
          : res.json(thoughtsText)
      )
      .catch((err) => res.status(500).json(err));
  },
  
  // Create new thought
  
  createThoughts({ params, body }, res) {
    Thoughts.create(body)
      .then(dbThoughtsData => {
        User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: dbThoughtsData._id }},
          { new: true }
        )
      .then(dbUserData => {
        if(!dbUserData) {
          res.status(404).json({ message: "No user found with this Id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(500).json(err));
    })
    .catch(err => res.status(500).json(err));
  },

  //update an existing thought using Id
  
  updateThoughts({ params, body }, res) {
    Thoughts.findOneAndUpdate(
      { _id: params.thoughtsId },
      body,
      { new: true }
    )
    .then(dbThoughtsData => {
      if(!dbThoughstData) {
        res.status(404).json({ message: "No thoughts with that Id" });
        return;
      }
      res.json(dbThoughtsData);
    })
    .catch(err => res.status(500).json(err));
  },
  
  //Delete thought using Id
  
  deleteThoughts({ params }, res) {
    Thoughts.findOneAndDelete({ _id: params.thoughtId })
    .then(dbThoughtsData => {
      if(!dbThoughtsData) {
        res.status(404).json({ message: "No thoughts with that Id"});
        return;
      }
      User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { thoughts: params.thoughtsId }},
        )
      .then(() => {
          res.status(200).json({ message: `Successfully deleted the thoughts from user id ${params.userId}` });
      })
      .catch(err => res.status(500).json(err));
    })  
    .catch(err => res.status(500).json(err));
  },

  //Add reaction
  
  addReaction({ params, body }, res) {
    Thoughts.findOneAndUpdate(
      { _id: params.thoughtsId },
      { $addToSet: { reactions:  body }},
      { new: true, runValidators: true }
      )
      .then(dbThoughtsData => {
        if(!dbThoughtsData) {
          res.status(404).json({ message: "No thoughts found with this Id" });
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch(err => res.status(500).json(err));
  },

  //Delete reaction
  //use path /api/thoughts/thoughtId/reactions/reactionId to delete a reaction
  deleteReaction({ params, body }, res) {
    Thoughts.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId }}},
      { new: true, runValidators: true }
    )
    .then(dbThoughtsData => {
      if(!dbThoughstData) {
        res.status(404).json({ message: "No thoughts found with this Id" });
        return;
      }
      res.json({ message: "Successfully deleted the reaction" });
    })
    .catch(err => res.status(500).json(err));
  },
};

