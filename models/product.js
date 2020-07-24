const mongoose = require('mongoose');

const Product = mongoose.model(
	'Product',
	new mongoose.Schema({
		name: String,
		price: Number,
		brand: String,
		description: String,
		image: String,
		category: String,
		trending: Boolean,
		countInStock: Number,
		tags: [String],
		date: { type: Date, default: Date.now },
	})
);

exports.Product = Product;

//module.exports = mongoose.model('Product', Product)
