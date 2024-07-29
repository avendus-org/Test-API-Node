// src/routes/index.js
const express = require("express");
const router = express.Router();
const exampleController = require("../controllers/exampleController");
const userRoutes = require("./userRoutes");

router.get("/example", exampleController.getExample);
router.use("/users", userRoutes);

module.exports = router;
