const beer = require("../models/beer");

function beerService() {
  return {
    list: () => beer.find(),
    add: (data) => new beer(data).save(),
    delete: (id) => beer.findByIdAndRemove(id),
  };
}

module.exports = beerService();
