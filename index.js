const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// model
const City = require("./model/city"); //exported from city.js file

const port = process.env.PORT || 5000;

//connection with mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8wioxsd.mongodb.net/WorldWise?retryWrites=true&w=majority`
  ) //connected to farmStand database
  .then(() => {
    console.log("Mongo connnection successful: ");
  })
  .catch((e) => {
    console.log("Mongo connection failed !!");
    console.log(e);
  });

//middleware
app.use(cors());
app.use(express.json());

//server
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// routes
app.get("/", (req, res) => {
  res.send("This is Home Route");
});

// creat a city
app.post("/cities", async (req, res) => {
  try {
    const body = req.body;
    const city = new City(body);
    console.log("data stored successfully!!");
    const data = await city.save();
    res.send(data);
  } catch (e) {
    console.log("data store failed!!");
    console.log(e);
  }
});

// get all city
app.get("/cities", async (req, res) => {
  const cities = await City.find({}); //find all city
  res.send(cities);
});

app.get("/cities/:id", async (req, res) => {
  const { id } = req.params;
  const data = await City.findById(id); //find one city
  console.log(data);
  res.send(data);
});
