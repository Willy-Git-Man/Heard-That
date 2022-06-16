const express = require("express");
const router = express.Router();
const { Albums, Songs } = require("../../db/models");
const asyncHandler = require("express-async-handler");

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


router.post(
  "/",
  asyncHandler(async (req, res) => {
    const createAlbum = await Albums.create(req.body);

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
