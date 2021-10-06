const randomCount = require("../models/randomCount");
const Beer = require("./../services/beerService");

exports.listbeers = async (req, res, next) => {
  try {
    console.log("listbeers");
    const beer = await Beer.list();
    res.json({ data: beer });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.random = async (req, res, next) => {
  try {
    console.log("random");
    const beer = await Beer.random();
    res.json({ ...beerTransformers(beer) });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.addbeer = async (req, res, next) => {
  try {
    console.log("addbeer");
    const beer = await Beer.add(req.body).then((data) => res.json(data));
    res.json(beer);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.deletebeers = function (req, res) {
  Beer.delete(req.param.id).then((data) => res.json(data));
};

const beerTransformers = (data) => ({
  _id: data._doc._id,
  uid: data._doc.uid,
  brand: data._doc.brand,
  name: data._doc.name,
  style: data._doc.style,
  hop: data._doc.hop,
  yeast: data._doc.yeast,
  malts: data._doc.malts,
  ibu: data._doc.ibu,
  alcohol: data._doc.alcohol,
  blg: data._doc.blg,
  randomCount: data.randomCount,
});
