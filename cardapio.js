#!/usr/bin/env node

var request = require('request');

var variables = require('./variables.js');
var cardapio = require('./commands/cardapio.js').handler;
var spoiler = require('./commands/spoiler.js').handler;

function postJambaToSlack(cardapio) {
  var url;
  if (variables.JAMBABOT_DEBUG) {
    url = variables.JAMBABOT_DEBUG_URL;
  } else {
    url = variables.JAMBABOT_PROD_URL;
  }

  request.post({ url: url, form: `payload={"text" : "${cardapio}"}` }, function(error) {
    if (error) {
      console.error(error);
      process.exit(1);
    } else {
      process.exit(0);
    }
  });
}

var today = new Date();
if (today.getHours() < 11) {
  cardapio(postJambaToSlack);
} else {
  spoiler(postJambaToSlack);
}
