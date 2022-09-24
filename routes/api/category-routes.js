const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => { //async added to work with await
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({ include: Product });
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }

});

router.get('/:id', async (req, res) => { //async added to work with await
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
  const catagoryData = await catagotry.findByPk(req.params.id, {
    include: [{ model: Product, through: Category, as: 'Product_tags!' }]
  });

  if (!catagoryData) {
    res.status(404).json({ message: 'No category with this id!' });
    return;
  }

  res.status(200).json(locationData);
} catch (err) {
  res.status(500).json(err);
}
});

router.post('/', async (req, res) => { //async added to work with await
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }

});

router.put('/:id', async (req, res) => { //async added to work with await
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, 
      {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => { //async added to work with await
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No Category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
