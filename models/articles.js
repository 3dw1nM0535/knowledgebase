// Data model structure for our knowledgebase App
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// articles data Schema
let articlesSchema = new Schema({
	title: {
		type: String,
		require: true
	},
	author: {
		type: String,
		require: true
	},
	body: {
		type: String,
		require: true
	}
});

let article = module.exports = mongoose.model('article', articlesSchema);
