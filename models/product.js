const mongoose = require('mongoose');
const { brandSchema } = require('./brand');
const { categorySchema } = require('./category');

const Product = mongoose.model(
	'Product',
	new mongoose.Schema({
		name: String,
		price: Number,
		brand: {
			type:brandSchema
		},
		description: String,
		image: String,
		category: {
			type:categorySchema,
		},
		trending: Boolean,
		countInStock: Number,
		tags: [String],
		date: { type: Date, default: Date.now },
	})
);

exports.Product = Product;

//module.exports = mongoose.model('Product', Product)
