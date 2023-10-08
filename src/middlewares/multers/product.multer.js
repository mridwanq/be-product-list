const multer = require('multer');
const moment = require('moment');
const path = require('path');

const productMulter = {
  productImageUploader: () => {
    const storageConfig = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(
          null,
          path.resolve(
            __dirname,
            '..',
            '..',
            '..',
            'public',
            'image',
            'productImages'
          )
        );
      },
      filename: (req, file, cb) => {
        const fileExtention = file.mimetype.split('/')[1];
        const filename = `productImage_${moment().format(
          'YYYY-MM-DD-HH-mm-ss'
        )}.${fileExtention}`;

        cb(null, filename);
      },
    });
    const uploader = multer({
      storage: storageConfig,
      fileFilter: (req, file, cb) => {
        if (file.mimetype.split('/')[0] !== 'image') {
          return cb('image file invalid');
        }
        return cb(null, true);
      },
      limits: 100000,
    });
    return uploader;
  },
};

module.exports = productMulter;
