const { Schema, model } = require('mongoose');
const reactionSchema = require('../models/Reaction');
const moment = require('moment');


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
        //again use moment for timestamp
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema]
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
thoughtsSchema.virtual('reactionCount').get(function () {
  return `reactions: ${this.reactions.length}`;
  });


// Initialize User model
const Thoughts = model('Thoughts', thoughtsSchema);

module.exports = Thoughts;