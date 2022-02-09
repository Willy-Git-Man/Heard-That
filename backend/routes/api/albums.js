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

module.exports = router
