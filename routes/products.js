const  {Product}  = require( '../models/product');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	const products = await Product.find()
	.sort('name');
	res.send(products);
});

router.post('/',  async (req, res) => {
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
		tags: req.body.tags
		//date: { type: Date, default: Date.now },
	  
	});
	await products.save();
	
	res.send(products);
  });
  

module.exports = router;
