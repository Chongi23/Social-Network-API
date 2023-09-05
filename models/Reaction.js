const { Schema, Types } = require('mongoose');
const moment = require('moment');


//Define Reaction Schema
const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody:{
            type : String ,  
            required: true,
            maxLength: 250
    },
    username: {
        type:String,   //this is the user who reacted to a thought
        require: true
    },
    createdAt: {
        type: Date,
        //Use moment for timestamp format
        default:Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MM DD YYYY [at] hh:mm a')
    },
},
{
    //to make sure that we are not overwriting any data when updating or creating a document in our database
    //Mongoose does not include 'virtuals' by default so add a property and set to true
      toJSON: {
        virtuals: true,
        
        getters:true,
    },
    id: false,


}

);

module.exports = reactionSchema;