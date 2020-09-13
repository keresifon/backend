const  { Brand }  = require( '../models/brand');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	const brands = await Brand.find()
	.sort('name');
	res.send(brands);
});

router.post('/',   async (req, res) => {
	//const { error } = validate(req.body); 
	//if (error) return res.status(400).send(error.details[0].message);
  
	const brand = new Brand({ 
		name: req.body.name,	
	  
	});
	await brand.save();
	
	res.send(brand);
  });

  router.delete('/:id', auth, async (req, res) => {
	const brand = await Brand.findByIdAndRemove(req.params.id);
  
	if (!brand) return res.status(404).send('The brand with the given ID was not found.');
  
	res.send(brand);
  });


router.get('/:id', async (req, res) => {
	const brand = await Brand.findById(req.params.id);
  
	if (!brand) return res.status(404).send('The brand with the given ID was not found.');
  
	res.send(brand);
  });
module.exports = router;
