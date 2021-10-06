// const mongoose = require("mongoose");

// const serverURI = process.env.DATABASE_URL || "mongodb://mongo/book";

// class DBConnection {
//   constructor() {
//     this._connect();
//   }
//   _connect() {
//     mongoose
//       .connect(serverURI, { useNewUrlParser: true })
//       .then(() => {
//         console.log("Database connection successful");
//       })
//       .catch(err => {
//         console.error("Database connection error");
//         console.log( err);
//       });
//   }
// }

// module.exports = new DBConnection();

const mongoose = require("mongoose");

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on("error", (err) => {
  console.error("moogoError", err);
  process.exit(-1);
});

// print mongoose logs in dev env
if (process.env === "development") {
  mongoose.set("debug", true);
}

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
const serverURI = process.env.DATABASE_URL || "mongodb://localhost:27017/myapp";
//  "mongodb://mongo/book";
exports.connect = () => {
  mongoose.connect(serverURI, {
    keepAlive: 1,
    useNewUrlParser: true,
    connectTimeoutMS: 30000,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  return mongoose.connection;
};
