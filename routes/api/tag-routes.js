const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const data = await Tag.findAll({ model: Product }).catch((err) => { res.json(err) });
  res.json(data);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const data = await Tag.findByPk(req.params.id, { include: Product }).catch((err) => { res.json(err) });
  res.json(data);
});

router.post('/', async (req, res) => {
  // create a new tag
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
