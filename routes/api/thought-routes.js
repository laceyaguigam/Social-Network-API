const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
  } = require('../../controllers/thoughtController');

// Set up GET all and POST at /api/thought
router
  .route('/')
  .get()
  .post();

// Set up GET one, PUT, and DELETE at /api/thought/:id
router
  .route('/:id')
  .get()
  .put()
  .delete();

module.exports = router;