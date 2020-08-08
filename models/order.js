const mongoose = require('mongoose');

const Order = mongoose.model(
	'Order',
	new mongoose.Schema({
		transaction_ref:{
			type: String
		},
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
			maxlength: 255,
			default: 'Pending'
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
