import express from "express";
import beerRoutes from "./routers/beerRouters.js";
const app = express();
const port = 5000;

app.use("/api/beers", beerRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
export default app;
