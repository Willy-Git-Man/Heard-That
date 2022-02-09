const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songsRouter = require('./songs.js')
const albumsRouter = require('./albums.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/songs', songsRouter)

router.use('/albums', albumsRouter)
// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });


// router.get('/test', function(req, res) {
//   res.json("Will");
// });



module.exports = router;
