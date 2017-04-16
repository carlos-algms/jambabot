const mongodb = require('../integrations/mongodb');
const ifood = require('../integrations/ifood');

(() => {
  module.exports = {
    pattern: /^pede ae ([^ ]*?) de ([^,]*), ([^,]*), ([^,]*)(?:, (.*))?$/i,
    handler: pedeAe,
    description: '*silviao pede ae* : {size} de {dish}, {salad}, {garnish}[, {comment}] ',
    channels: ['delicias-do-jamba', 'dev-delicias-do-jamba']
  };


  function pedeAe(message, callback, size, dish, salad, garnish, comment) {
    mongodb.isValidDish(dish)
      .then(runAutomatedOrder)
      .catch(() => callback('Não tem esse prato ai não, C fude. Kkkkkkkk'));


    function runAutomatedOrder(isValidDish) {
      if (!isValidDish) {
        console.info('Não é um prato válido: ', dish);
        return callback('Não tem esse prato ai não, C fude. Kkkkkkkk');
      }

      console.log('Prestes a chamar o ifood: ', size, dish, salad, garnish, comment);
      return ifood.pedir(message, size, dish, salad, garnish, comment)
        .then(callback)
        .catch(callback);
    }
  }
})();