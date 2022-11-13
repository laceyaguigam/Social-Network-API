const thought = require(`../models/thought`)


const thoughtController = {
    //methods 
  // get all thoughts
  getAllThoughts(req, res) {
    Thoughts.find({})
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },








module.exports = thoughtController;