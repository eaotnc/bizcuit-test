const beer = require("../models/beer");

exports.list = () => beer.find();
exports.random = async () => {
  const dataCount = await beer.count().exec();
  var random = Math.floor(Math.random() * dataCount);
  let result = await beer.findOne().skip(random).exec();
  return result;
};
exports.add = (data) => new beer(data).save();
exports.delete = (id) => beer.findByIdAndRemove(id);
