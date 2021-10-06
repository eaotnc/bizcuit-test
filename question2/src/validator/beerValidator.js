const { body, validationResult } = require("express-validator");
const userValidationRules = () => {
  return [
    body("_id").exists(),
    body("uid").exists(),
    body("brand").exists(),
    body("name").exists(),
    body("style").exists(),
    body("hop").exists(),
    body("yeast").exists(),
    body("malts").exists(),
    body("ibu").exists(),
    body("alcohol").exists(),
    body("blg").exists(),
  ];
};
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "invalid-body",
      code: 400,
      errors: errors.array(),
    });
  }
};

module.exports = {
  userValidationRules,
  validate,
};
