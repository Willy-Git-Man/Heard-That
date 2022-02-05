const express = require("express");
const router = express.Router();
const { User, Songs } = require("../../db/models");
const asyncHandler = require("express-async-handler");

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const getAllSongs = await Songs.findAll();


    res.json({ message: `The general get route for all songs is working!`})
    return res.json({
      getAllSongs,
    });
  })
);

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const createSong = await Songs.create(req.body);
    // console.log('createSong:', createSong)

    res.json({ message: `${createSong.songName} had been successfully added!`})
    return res.json({
      createSong,
    });
  })
);
//I am getting the same error as put though it similarly is posting successfully


router.put(
  '/:id',
  asyncHandler(async (req, res) => {
    const songChanges = req.body;

    await Songs.update(songChanges, {
      where: {
        id: req.params.id,
      },
    });

    res.json({ message: `${songChanges.songName} had been successfully updated!`})
    return res.json(songChanges);
  })
);
//I am getting this error 'Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client' when I update albeit it is updating successfully

router.delete(
  '/:id',
  asyncHandler( async (req,res) => {
    const songId = req.params.id
    const songToDelete = await Songs.findByPk(songId)

    await songToDelete.destroy()
    res.json({ message: `${songToDelete.songName} had been successfully deleted!`})
  })
)

module.exports = router;
