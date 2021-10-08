const mongoose = require("mongoose");

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
const serverURI = process.env.DATABASE_URL || "mongodb://localhost:27017/beers";
//  "mongodb://mongo/beer";
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
