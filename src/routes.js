const express = require("express");

const router = express.Router();

// ---> Categories

router.get("/categories", (req, res) => {
  res.send("List of categories");
});

router.get("/categories/:id", (req, res) => {
  const categoryId = req.params.id;

  res.send(`Get category by ID: ${categoryId}`);
});

router.post("/categories", (req, res) => {
  res.send("Create category");
});

router.put("/categories/:id", (req, res) => {
  const categoryId = req.params.id;

  res.send(`Update category by ID: ${categoryId}`);
});

router.delete("/categories/:id", (req, res) => {
  const categoryId = req.params.id;

  res.send(`Delete category by ID: ${categoryId}`);
});

module.exports = router;
