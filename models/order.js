const mongoose = require('mongoose');

const Order = mongoose.model(
	'Order',
	new mongoose.Schema({
		itemsOrdered: {
			type: Array
			
		},
		user: {
			type: String
		},
		totalPrice: {
			type: Number
			
		},
		status: {
			type: String,
			maxlength: 255
		},
		paymentStatus: {
			type: Boolean,
			default: 0
		},
		date: {
			type: Date,
			default: Date.now
		},
	})
);

exports.Order = Order;
