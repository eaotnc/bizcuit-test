const app = require("./app");
const port = process.env.PORT || 8080;
const DBConnection = require("./db/DBConnection");

DBConnection.connect();

app.set("port", port);
app.listen(app.get("port"), () => {
  console.log(`app listening at http://localhost:${port}`);
});
