const express = require('express');
const products = require('../routes/products');
const users = require('../routes/users');
const auth = require('../routes/auth');
const order = require('../routes/orders');
const category = require('../routes/categories');
const brand = require('../routes/brands');




module.exports = function (app) {
	//app.use(express.json());
	app.use('/api/products', products);
	app.use('/api/users', users);
	app.use('/api/auth', auth);
	app.use('/api/order', order);
	app.use('/api/category', category);
	app.use('/api/brand', brand);
	
};
