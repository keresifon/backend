const  { Category }  = require( '../models/category');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	const categories = await Category.find()
	.sort('name');
	res.send(categories);
});

router.post('/',   async (req, res) => {
	//const { error } = validate(req.body); 
	//if (error) return res.status(400).send(error.details[0].message);
  
	const categories = new Category({ 
		name: req.body.name,	
	  
	});
	await categories.save();
	
	res.send(categories);
  });

  router.delete('/:id', auth, async (req, res) => {
	const category = await Category.findByIdAndRemove(req.params.id);
  
	if (!category) return res.status(404).send('The category with the given ID was not found.');
  
	res.send(category);
  });


router.get('/:id', async (req, res) => {
	const category = await Category.findById(req.params.id);
  
	if (!category) return res.status(404).send('The category with the given ID was not found.');
  
	res.send(category);
  });
module.exports = router;
