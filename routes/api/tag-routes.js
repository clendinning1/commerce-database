const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// List all Tags
router.get('/', async (req, res) => {
  // be sure to include its associated Product data

  try {
    const data = await Tag.findAll({ model: Product });
    res.json(data);
  } catch (err) {
    res.json(err);
    console.log("ERROR:", err);
  }

});

// Get one Tag by ID in URL
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const data = await Tag.findByPk(req.params.id, { include: Product });
    res.json(data);
  } catch (err) {
    res.json(err);
    console.log("ERROR:", err);
  }

});

// Create a new Tag
router.post('/', async (req, res) => {

  /*
  POST REQUEST SYNTAX:
  {
    "tag_name": "new"
  }
  */

  try {
    const data = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }

});

// Update a Tag (by ID in URL)
router.put('/:id', async (req, res) => {

  try {
    const data = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!data[0]) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }

});

// Delete a Tag (by ID in URL)
router.delete('/:id', async (req, res) => {

  try {
    const data = await Tag.destroy({
      where: {
        id: req.params.id,
      }
    });
    if (!data) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
