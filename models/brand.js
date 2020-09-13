const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
	name: String,
});
const Brand = mongoose.model('Brand', brandSchema);

exports.brandSchema = brandSchema;
exports.Brand = Brand;
