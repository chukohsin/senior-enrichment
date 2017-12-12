const db = require('../index');
const Sequelize = require('sequelize');

const Campus = db.define('campus', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	imgUrl: {
		type: Sequelize.STRING,
		defaultValue: "https://cdn.shopify.com/s/files/1/0250/8867/products/canary_black_3691e0a1-afc5-4dda-97d8-d02723e8e5d2_1024x1024.jpg?v=1412966211"
	},
	description: {
		type: Sequelize.TEXT
	}
})

module.exports = {Campus}