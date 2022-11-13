const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/userController');



// Set up GET all and POST at /api/user
router
  .route('/')
  .get()
  .post();

// Set up GET one, PUT, and DELETE at /api/user/:id
router
  .route('/:id')
  .get()
  .put()
  .delete();

module.exports = router;