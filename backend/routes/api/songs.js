const express = require("express");
const router = express.Router();
const { User, Songs } = require("../../db/models");
const asyncHandler = require("express-async-handler");

// var multer = require('multer')
// var upload = multer({dest:'uploads/'})
const upload = require("../../common");
const { uploadFile } = require("../../aws_s3");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

// import  from '../../aws_s3'

// const validateSongCreate = [

//     check('songName')
//       .exists({ checkFalsy: true })
//     .isLength({ min: 4 })

//       .notEmpty()
//       .withMessage('Please provide a valid email or username.'),
//     check('artistName')
//       .exists({ checkFalsy: true })
//       .withMessage('Please provide a password.'),
//     handleValidationErrors
//   ];


router.get(
  '/',
  asyncHandler(async (req, res) => {
    const getAllSongs = await Songs.findAll();


    // res.json({ message: `The general get route for all songs is working!`})
    return res.json(
      getAllSongs,
      );
    })
    );

    router.get('/:id(\\d+)',
    asyncHandler( async (req, res) => {
      const id = parseInt(req.params.id)
      const targetSong = await Songs.findByPk(id)
      return res.json({targetSong})
    })
    )



    router.post(
      '/',
      asyncHandler(async (req, res) => {
        // const { songName, password, username } = req.body;

        const createSong = await Songs.create(req.body);

        return res.json({
          createSong,
        });
      })
      );

      // router.post('/', upload.single('image'), asyncHandler(async(req,res) => {
      //   const file = req.file
      //   console.log('$$$$$$$$$$$$$',file)

      //   const createSong = await Songs.create(req.body);

      //   res.send('aws express working')
      //   return res.json({
      //     createSong,
      //   });
      // })
      // )


      // router.post("/", upload.single("image"), asyncHandler(async (req, res) => {
      //   // console.log('request',req);
      //   // uploading to AWS S3
      //   const result = await uploadFile(req.file);  // Calling above function in s3.js
      //   console.log("S3 response", result);
      //   // You may apply filter, resize image before sending to client
      //   // Deleting from local if uploaded in S3 bucket
      //   await unlinkFile(req.file.path);
      //   const createSong = await Songs.create(req.body);

      //   return res.json({
      //     createSong,
      //   });
      //   res.send({
      //     status: "success",
      //     message: "File uploaded successfully",
      //     data: req.file,
      //   });
      // }));


router.put(
  '/:id',
  asyncHandler(async (req, res) => {
    const songChanges = req.body;

    await Songs.update(songChanges, {
      where: {
        id: req.params.id,
      },
    });

    // res.json({ message: `${songChanges.songName} had been successfully updated!`})
    return res.json(songChanges);
  })
);
//I am getting this error 'Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client' when I update albeit it is updating successfully

router.delete(
  '/:id',
  asyncHandler( async (req,res) => {
    const songId = req.params.id
    const songToDelete = await Songs.findByPk(songId)

    songToDelete.destroy()
    res.json({ message: `${songToDelete.songName} has been successfully deleted!`})
  })
)

module.exports = router;
