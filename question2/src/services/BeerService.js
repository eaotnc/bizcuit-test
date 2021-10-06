const beer = require("../models/beer");
const randomCount = require("../models/randomCount");

exports.list = () => beer.find();
exports.random = async () => {
  const beerCountNumber = await beer.countDocuments().exec();
  var random = Math.floor(Math.random() * beerCountNumber);
  let result = await beer.findOne().skip(random).exec();
  const randomCount = await getCount();
  return { ...result, randomCount: randomCount };
};
exports.add = (data) => new beer(data).save();
exports.delete = (id) => beer.findByIdAndRemove(id);

const getCount = async () => {
  const result = await randomCount.find();
  if (result[0] && result[0].randomCount) {
    const count = result[0].randomCount;
    randomCount.findOneAndUpdate(
      { randomCount: count },
      { randomCount: count + 1, eao: 3 },
      { upsert: true }
    );
    return count + 1;
  } else {
    new randomCount({ randomCount: 1 }).save();
    return 0;
  }
};
