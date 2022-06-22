const express = require("express");
const router = express.Router();
const { Albums, Songs } = require("../../db/models");
const asyncHandler = require("express-async-handler");


const upload = require("../../aws_s3");
const { uploadFile, getFileStream } = require("../../aws_s3");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

const multer = require('multer')
// const upload = multer({dest:'uploads/'})

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const getAllAlbums = await Albums.findAll();

    return res.json(getAllAlbums);
  })
);

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const targetAlbum = await Albums.findByPk(id);

    const targetAlbumSongs = await Songs.findAll({
      where: { albumId: id },
    });

    return res.json({ targetAlbum, targetAlbumSongs });
  })
);


router.get(
  "/songs/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);

    const targetAlbumSongs = await Songs.findAll({
      where: { albumId: id },
    });

    return res.json({ targetAlbumSongs });
  })
);

router.get('/:key', (req, res) => {
  console.log(req.params)
  const key = req.params.key
  const readStream = getFileStream(key)

  readStream.pipe(res)
})


// router.post('/', upload.single('image'), async (req, res) => {
//   const file = req.file
//   console.log('file',file)

//   // apply filter
//   // resize

//   const result = await uploadFile(file)
//   await unlinkFile(file.path)
//   console.log(result)
//   const description = req.body.description
//   res.send({imagePath: `/images/${result.Key}`})
// })

// router.post('/', upload.single('imageUrl'), (req, res) => {
//   if (!req.files) res.status(400).json({ error: 'No files were uploaded.' })

//   res.status(201).json({
//     // message: 'Successfully uploaded ' + req.files.length + ' files!',
//     message: 'Successfully uploaded ' + req.files + ' files!',

//     files: req.files
//   })
// })


// router.post('/upload', upload.single('inputFile'), (req, res) => {
//   if (!req.files) res.status(400).json({ error: 'No files were uploaded.' })

//   res.status(201).json({
//     message: 'Successfully uploaded ' + req.files.length + ' files!',
//     files: req.files
//   })
// })




router.post(
  "/",
  //  upload.single('inputFile'),
  asyncHandler(async (req, res) => {
    // console.log(req.body)
    console.log('reqqqqqqqqqqqq',req.file)
    const createAlbum = await Albums.create(req.body);
    console.log('create album $$$$$$$$$$$$$$$$',createAlbum)
    return res.json({ createAlbum });
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const albumChanges = req.body;

    await Albums.update(albumChanges, {
      where: { id: req.params.id },
    });

    return res.json(albumChanges);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const albumIds = req.params.id;
    const albumToDelete = await Albums.findByPk(albumIds);
    const songsToDelete = await Songs.findAll({where: {albumId: albumIds}})

    songsToDelete.forEach((song) => {
      song.destroy()
    })

    albumToDelete.destroy();
    res.json({
      message: `${albumToDelete.title} has been successfully deleted!`
    });
  })
);

module.exports = router;
