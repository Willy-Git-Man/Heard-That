const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songsRouter = require('./songs.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/songs', songsRouter)
// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });


// router.get('/test', function(req, res) {
//   res.json("Will");
// });



module.exports = router;
