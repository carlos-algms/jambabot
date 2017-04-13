const mongoose = require('mongoose');


(() => {
  const DishImageSchema = mongoose.Schema({
    dish: { type: String, unique: true },
    image: String
  });
  const DishImage = mongoose.model('DishImage', DishImageSchema);

  function findDishImage(dish, callback) {
    DishImage.findOne({ dish: dish.toLowerCase() }, (error, dishImage) => {
      if (error) {
        callback(error, undefined);
        return;
      }

      if (!dishImage) {
        callback(new Error(`Couldn't find an image for ${dish}`), undefined);
        return;
      }

      callback(null, dishImage);
    });
  }

  function getImageForDish(dish, callback) {
    findDishImage(dish, (error, dishImage) => {
      if (error) {
        callback(error, undefined);
        return;
      }

      callback(null, dishImage.image);
    });
  }

  function addImageForDish(dish, image, callback) {
    findDishImage(dish, (error, dishImage) => {
      let validDishImage = dishImage;

      if (dishImage) {
        dishImage.image = image;
      } else {
        validDishImage = new DishImage({ dish: dish.toLowerCase(), image });
      }

      validDishImage.save((errorSaveDishImage) => {
        callback(errorSaveDishImage);
      });
    });
  }

  module.exports = {
    getImageForDish,
    addImageForDish
  };
})();
