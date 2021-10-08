const Beer = require("../models/Beer");
const RandomCount = require("../models/Count");

exports.list = () => Beer.find();
exports.random = async () => {
  const BeerCountNumber = await Beer.countDocuments().exec();
  var random = Math.floor(Math.random() * BeerCountNumber);
  let result = await Beer.findOne().skip(random).exec();
  if (result) {
    const randomCount = await getCount();
    return { ...result, randomCount: randomCount };
  }
  return null;
};

exports.add = (data) => new Beer(data).save();

exports.delete = (id) => Beer.findByIdAndRemove(id);

const getCount = async () => {
  const result = await RandomCount.find();
  if (result[0] && result[0].randomCount) {
    const count = result[0].randomCount;
    RandomCount.updateOne(
      { _id: result[0]._id },
      { randomCount: count + 1 },
      { upsert: true },
      () => {}
    );
    return count + 1;
  } else {
    new RandomCount({ randomCount: 1 }).save();
    return 1;
  }
};
