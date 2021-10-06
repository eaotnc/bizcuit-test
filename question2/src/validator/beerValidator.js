const { body, validationResult } = require("express-validator");
module.exports.addBeer = (req, res, next) => {
  const errors = validationResult(req);
  console.log("🚀 ~ errors", errors);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "invalid-body",
      code: 400,
      errors: errors.array(),
    });
  }
};
