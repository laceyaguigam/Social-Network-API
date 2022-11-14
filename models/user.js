const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    minlength: 1, 
    maxlength: 280,

  },
  username: {
        type: String,
        required: true, 
    
      },
  thought: [
    {
        type: Schema.Types.ObjectId,
        ref: "Thought"
      }
  ],
  friends: [
    {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
  ]
    
  },
  {
    toJSON: {
        getters: true
    },
    id:false
  }
  );

const User = model('User', UserSchema);

module.exports = User;


// need username, email, thoughts, friends
// schema settings: friendCount retrieves the length of the user's friends array