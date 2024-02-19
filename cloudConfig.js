
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
    // cloud_name:"do1g8n3vj",
    // api_key:"772712844143724",
    // api_secret:"Q-qrKCz60GG9TeOksN1-jI5k2mE"
});


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'wanderlust_DEV',
      allowerdFormats: ["png", "jpg", "jpeg"],

    },
  });

  module.exports ={
    cloudinary,
    storage,
  };