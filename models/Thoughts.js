const { Schema, model } = require('mongoose');
const Reaction = require('../models/Reaction');



//Define Thoughts Schema
const thoughtsSchema = new Schema(
  {
    thoughtsText: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 250
      },
      createdAt: {
        type: Date,
        default: Date.now,
    },

    username: {
        type: String,
        required: true,
    },
    reactions: [Reaction]
  },
  { 
    toJSON: {
    
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

//virtual method to get reaction count
thoughtsSchema.virtual('reactionCount')
//Getter
.get(function () {
  return this.reactions.length;
  });


// Initialize User model
const Thoughts = model('Thoughts', thoughtsSchema);

module.exports = Thoughts;