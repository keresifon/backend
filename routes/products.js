const  { Product }  = require( '../models/product');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	const products = await Product.find()
	.sort('name');
	res.send(products);
});

router.post('/', auth,  async (req, res) => {
	//const { error } = validate(req.body); 
	//if (error) return res.status(400).send(error.details[0].message);
  
	const products = new Product({ 
		name: req.body.name,
		price: req.body.price,
		brand: req.body.brand,
		description: req.body.description,
		image: req.body.image,
		category: req.body.category,
		trending: req.body.trending,
		countInStock: req.body.countInStock,
		tags: req.body.tags,
		date: req.body.date,
	  
	});
	await products.save();
	
	res.send(products);
  });

  router.delete('/:id', auth, async (req, res) => {
	const product = await Product.findByIdAndRemove(req.params.id);
  
	if (!product) return res.status(404).send('The product with the given ID was not found.');
  
	res.send(product);
  });


router.get('/:id', async (req, res) => {
	const product = await Product.findById(req.params.id);
  
	if (!product) return res.status(404).send('The product with the given ID was not found.');
  
	res.send(product);
  });
module.exports = router;
