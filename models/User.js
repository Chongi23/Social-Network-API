const { Schema, model } = require('mongoose');


//Define User Schema
const userSchema = new Schema(
  {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
      //Validator for email address
        validate: {
          validator: function(v) {
               return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
           },
           message: "Please enter a valid email"
          },
        required: [true, "Email required"]
    },
      thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
      }],
      friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
      }],
  },
  {
    toJSON: {
  //Mongoose does not include virtuals by default so add the property and set it to true.
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Virtual method to get total friend count
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
  });


// Initialize User  model
const User = model('User', userSchema);


//Export User model
module.exports = User;
