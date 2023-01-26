const express = require("express");
const route = express.Router();
const Car = require("../model/cars");
const fs = require("fs");

route.post("/init", (req, res) => {
  fs.readFile("./seeds/cars.json", "utf8", async (err, data) => {
    if (err) {
      console.error(err);
      res.json("Fail");
      return;
    }
    await Car.deleteMany({});
    const jsData = JSON.parse(data);
    Car.insertMany(jsData.cars);
    res.json("succeed");
  });
});

route.get("/", async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
});

route.get("/:id", async (req, res) => {
  const find = await Car.findById(req.params.id);
  res.json(find);
});

route.post("/", async (req, res) => {
  const newCar = await Car.create({ type: "Audi", model: "B-Class", year: 2020, color: "Silver" });
  res.json(newCar);
});

route.put("/:id", async (req, res) => {
  try {
    const updateCar = await Car.findByIdAndUpdate(req.params.id, req.body);
    res.json(updateCar);
  } catch (error) {
    res.send(error.message);
  }
});

route.delete("/:id", async (req, res) => {
  const deleteCar = await Car.findByIdAndDelete(req.params.id);
  res.json(deleteCar);
});

route.put("/:id/buy", async (req, res) => {
  try {
    const purchase = await Car.findById(req.params.id);
    if (purchase.Supply > 0) {
      purchase.Supply = purchase.Supply - 1;
      const decreased = await Car.findByIdAndUpdate(req.params.id, purchase);
      console.log(decreased);
      res.json(decreased);
    } else {
      res.json("fail request");
    }
  } catch (error) {
    res.status(419);
    res.json(error.message);
  }
});

module.exports = route;
