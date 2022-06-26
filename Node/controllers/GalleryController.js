const Gallery = require("../models/Gallery");

//Insert gallery
exports.insertGallery = (req, res) => {
  const gallery = new Gallery({
    galleryImage: req.body.galleryImage,
   
   
    galleryLink: req.body.galleryLink
  });
  gallery
    .save()
    .then(docs => {
      res.status(200).json({
        message: "Create sucessfully",
        Gallery: {
          galleryImage: docs.galleryImage,
        
        },
        ID: docs._id,
        status: {
          request: "200 Ok",
          method: "POST"
        }
      });
    })
    .catch(err => {
      res.status(404).json(err);
    });
};

//Get Gallery image
exports.getGallery = (req, res) => {
  Gallery.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};