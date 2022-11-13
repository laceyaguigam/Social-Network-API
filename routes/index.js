const router = require('express').Router();
const thoughtRoutes = require('./api/thought-routes')
const userRoutes = require('./api/user-routes')
const apiRoutes = require('./api');

router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);

router.use((req, res) => {
  res.send("Wrong Route!")
});

module.exports = router;