const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const signUpModel = require("../models/signUp.model");
const travelModel = require("../models/travel.model");

//SignUp Method
router.post("/signUp", async (req, res) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
  const data = new signUpModel({
    username: req.body.fullname,
    emailId: req.body.email,
    password: hashedPassword,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const data = {
      emailId: req.body.username,
    };
    const dataExists = await signUpModel.findOne(data).lean();
    if (!dataExists) {
      res.status(200).json(false);
    } else if (dataExists) {
      const match = await bcrypt.compare(
        req.body.password,
        dataExists.password
      );
      if (match) {
        res.status(200).json(true);
      } else {
        res.status(200).json(false);
      }
    } else {
      res.status(200).json(false);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/travelData", async (req, res) => {
  const data = new travelModel(req.body);
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/travelData", async (req, res) => {
  try {
    const dataToSave = await travelModel.find();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", (req, res) => {
  res.send("Get by ID API");
});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});
module.exports = router;
