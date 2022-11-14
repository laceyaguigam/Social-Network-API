const { Schema, Types } = require('mongoose');


const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
   default: () => new Types.ObjectId,

  },
  username: {
    type: String,
    required: true, 

  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  reactionBody: {
    type: String, 
    require: true,
    maxlength: 280,
  }
    
  },
  {
    toJSON: {
        getters: true
    },
    id:false
  }
  );

module.exports = ReactionSchema;



// need reactionID, reactionBody, username, createdAt


