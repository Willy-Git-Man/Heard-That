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

module.exports = router
