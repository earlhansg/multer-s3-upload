
import { Config } from "../helper/Config";

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');


aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new aws.S3();

const upload = multer({
  fileFilter: Config.photosFileFilter,
  storage: multerS3({
    s3,
    bucket: "sample-multer-s3",
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.originalname});
    },
    key: function (req, file, cb) {
      console.log(cb);
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;