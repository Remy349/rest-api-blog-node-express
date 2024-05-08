const express = require("express");

const router = express.Router();

// ---> Categories

const CATEGORIES = [
  { id: 1, name: "Test category name 1", createdAt: new Date() },
  { id: 2, name: "Test category name 2", createdAt: new Date() },
  { id: 3, name: "Test category name 3", createdAt: new Date() },
];

router.get("/categories", (req, res) => {
  res.json(CATEGORIES);
});

router.get("/categories/:id", (req, res) => {
  const categoryId = req.params.id;

  const category = CATEGORIES.find((item) => item.id === Number(categoryId));

  if (!category) {
    res.status(404).json({ message: "Category not found" });
  }

  res.json(category);
});

router.post("/categories", (req, res) => {
  const { name } = req.body;

  const id = CATEGORIES.length + 1;

  const newCategory = {
    id,
    name,
    createdAt: new Date(),
  };

  CATEGORIES.push(newCategory);

  res.status(201).json({ message: "Category successfully created" });
});

router.put("/categories/:id", (req, res) => {
  const categoryId = req.params.id;

  res.send(`Update category by ID: ${categoryId}`);
});

router.delete("/categories/:id", (req, res) => {
  const categoryId = req.params.id;

  const category = CATEGORIES.find((item) => item.id === Number(categoryId));

  if (!category) {
    res.status(404).json({ message: "Category not found" });
  }

  CATEGORIES.filter((item) => item.id !== category.id);

  res.status(204);
});

module.exports = router;
