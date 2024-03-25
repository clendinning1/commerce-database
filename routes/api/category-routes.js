const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// List all Categories
router.get('/', async (req, res) => {
  // be sure to include its associated Products

  try {
    const data = await Category.findAll({ include: Product });
    res.json(data);
  } catch (err) {
    res.json(err);
    console.log("ERROR:", err);
  }

});

// Get one Category by ID in URL
router.get('/:id', async (req, res) => {
  // be sure to include its associated Products

  try {
    const data = await Category.findByPk(req.params.id, { include: Product })
    res.json(data);
  } catch (err) {
    res.json(err);
    console.log("ERROR:", err);
  }

});

// Create a new Category
router.post('/', async (req, res) => {

  /*
  POST REQUEST SYNTAX:
  {
    "category_name": "new"
  }
  */

  try {
    const data = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }

});

// Update a Category (by ID in URL)
router.put('/:id', async (req, res) => {

  try {
    const data = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!data[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }

});

// Delete a Category (by ID in URL)
router.delete('/:id', async (req, res) => {

  try {
    const data = await Category.destroy({
      where: {
        id: req.params.id,
      }
    });
    if (!data) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
