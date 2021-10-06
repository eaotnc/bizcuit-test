const Book = require("./../services/BookService");

const BookController = () => {
  const listBooks = function (req, res) {
    Book.list().then((data) => res.json(data));
  };

  const addBooks = function (req, res) {
    Book.add(req.body).then((data) => res.json(data));
  };

  return {
    list: listBooks,
    add: addBooks,
  };
};

export default BookController;
