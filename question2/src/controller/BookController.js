const Book = require("./../services/BookService");

exports.listBooks = async (req, res, next) => {
  try {
    const book = await Book.list();
    res.json(book);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.addBooks = async (req, res, next) => {
  try {
    const book = await Book.add(req.body).then((data) => res.json(data));
    res.json(book);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.deleteBooks = function (req, res) {
  Book.delete(req.param.id).then((data) => res.json(data));
};
