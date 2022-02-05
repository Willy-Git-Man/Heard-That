const express = require("express");
const router = express.Router();
const { User, Songs } = require("../../db/models");
const asyncHandler = require("express-async-handler");

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const songs = await Songs.findAll();

    return res.json({
      songs,
    });
  })
);

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const createSong = await Songs.create(req.body);
    // console.log('createSong:', createSong)

    return res.json({
      createSong,
    });
  })
);


router.put(
  '/:id',
  asyncHandler(async (req, res) => {
    const songChanges = req.body;

    await Songs.update(songChanges, {
      where: {
        id: req.params.id,
      },
    });

    return res.json(songChanges);
  })
);

module.exports = router;
