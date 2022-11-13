const user = require(`../models/user`)


const userController = {
    //methods 
      // get all users
      getAllUser(req, res) {
        User.find({})
          .then(dbUserData => res.json(dbUserData))
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
      },
    
    







module.exports = userController; 