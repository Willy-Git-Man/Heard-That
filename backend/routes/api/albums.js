const express = require("express");
const router = express.Router();
const { Albums } = require("../../db/models");
const asyncHandler = require("express-async-handler");

router.get(
  '/',
  asyncHandler( async (req,res) => {
    const getAllAlbums = await Albums.findAll()

    return res.json(getAllAlbums)
  })
)

router.post(
  '/',
  asyncHandler( async (req,res) => {
    const createAlbum = await Albums.create(req.body)

    return res.json({createAlbum})
  })
)

router.put(
  '/:id',
  asyncHandler( async (req,res) => {
    const albumChanges = req.body

    await Albums.update(albumChanges, {
      where: {id: req.params.id}
    })

    return res.json(albumChanges)
  })
)

router.delete(
  '/:id',
  asyncHandler( async (req,res) => {
    const albumId = req.params.id
    const albumToDelete = await Albums.findByPk(albumId)
    albumToDelete.destroy()
    res.json({message: `${albumToDelete.title} has been successfully deleted!`})
  })
)

module.exports = router
