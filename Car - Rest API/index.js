const express = require("express");
const app = express();
require("./dal/cars");
const carsRoute = require("./routes/cars.js");
app.use(express.json());
app.use("/cars", carsRoute);

app.listen(3000, () => {
  console.log("Server Connected at port 3000");
});
