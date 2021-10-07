const Beer = require("./../services/BeerService");
const BeerModel = require("./../models/Beer");

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
    if (beer) {
      res.json({
        success: true,
        message: "success",
        data: beerTransformers(beer),
      });
    } else {
      res.status(404).json({
        success: false,
        message: "data not found",
        data: null,
      });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.addbeer = async (req, res, next) => {
  try {
    console.log("addbeer");
    const duplicateIdBeer = await BeerModel.findOne({ _id: req.body._id });
    if (duplicateIdBeer) {
      res.status(400).json({
        success: false,
        message: "duplicate id",
        data: null,
      });
    }
    const beer = await Beer.add(req.body).then((data) =>
      res.json({ status: "success", code: 200, data: data })
    );
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
