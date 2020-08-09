const  { Order }  = require( '../models/order');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose")

router.get('/', async (req, res) => {
	const orders = await Order.find()
	.sort('name');
	res.send(orders);
});

router.post('/',  async (req, res) => {
	//const { error } = validate(req.body); 
	//if (error) return res.status(400).send(error.details[0].message);
  
	const order =  new Order({ 
		transaction_ref: req.body.transaction_ref,
		itemsOrdered: req.body.itemsOrdered,
		user: req.body.user,
		totalPrice: req.body.totalPrice,
		status: req.body.status,
		paymentStatus: req.body.paymentStatus,
        date: req.body.date,
	  });
	
	  await order.save();
	
	 await res.send(order);
  });

//   router.delete('/:id', auth, async (req, res) => {
// 	const product = await Product.findByIdAndRemove(req.params.id);
  
// 	if (!product) return res.status(404).send('The product with the given ID was not found.');
  
// 	res.send(product);
//   });



   router.get('/:id', async (req, res) => {
	const order = await Order.find({transaction_ref:req.params.id})
 
	if (!order) return res.status(404).send('The transaction with the given ID was not found.');
 
	res.send(order);
  });

  router.delete('/:id', async (req, res) => {
	const order = await Order.findOneAndRemove({transaction_ref:req.params.id})
 
	if (!order) return res.status(404).send('The transaction with the given ID was not found.');
 
	res.send(order);
  });

  router.put("/:id",  async (req, res) => {
	
	mongoose.set('debug', true);
	const order = await Order.findOneAndUpdate(
		{transaction_ref:req.params.id},
		 { 
			
			status: req.body.status,
			paymentStatus: req.body.paymentStatus,
			
			
		  },
	  {
		new: true,
		upsert: true
	  }
	);
  
	if (!order)
	  return res.status(404).send("The order does not exist.");
	await order.save();
	res.send(order);
  });

module.exports = router;
