// require("dotenv").config();
// const S3 = require("aws-sdk/clients/s3");
// const fs = require("fs");
// const bucketName = process.env.AWS_BUCKET_NAME;
// // const region = process.env.AWS_BUCKET_REGION;
// const accessKeyId = process.env.AWS_ACCESS_KEY;
// const secretAccessKey = process.env.AWS_SECRET_KEY;
// const s3 = new S3({
//   // region,
//   accessKeyId,
//   secretAccessKey,
// });
// // UPLOAD FILE TO S3
// function uploadFile(file) {
//   console.log('fileeeee',file)
//   const fileStream = fs.createReadStream(file.path);
//   const uploadParams = {
//     Bucket: bucketName,
//     Body: fileStream,
//     // Key: file.filename,
//   };
//   console.log(uploadParams)
// return s3.upload(uploadParams).promise(); // this will upload file to S3
// }

// function getFileStream(fileKey) {
//   const downloadParams = {
//     Key: fileKey,
//     Bucket: bucketName
//   }

//   return s3.getObject(downloadParams).createReadStream()
// }
// module.exports = { uploadFile, getFileStream };


const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  // region: process.env.AWS_DEFAULT_REGION
})

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    // acl: 'public-read',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname })
    },
    key: (req, file, cb) => {
      cb(null, 'files_from_node/' + Date.now().toString() + file.originalname)
    }
  })
})

module.exports = {
  upload
}
