const Beer = require("./../services/beerService");

exports.listbeers = async (req, res, next) => {
  try {
    const beer = await Beer.list();
    res.json(beer);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.addbeers = async (req, res, next) => {
  try {
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
