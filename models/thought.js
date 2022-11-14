const { Schema, model } = require('mongoose');
const reactionSchema = require(`./reaction`)

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1, 
    maxlength: 280,

  },
  username: {
    type: String,
    required: true, 

  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  reactions: [reactionSchema]
    
  },
  {
    toJSON: {
        getters: true
    },
    id:false
  }
  );

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;


// need thoughtText, createAt, username, reactions
// schema settings: reactionCount retrieves the length of the user's reactions






