const db = require('../index');
const Sequelize = require('sequelize');

const Student = db.define('student', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isEmail: true
		}
	},
	gpa: {
		type: Sequelize.DECIMAL,
		validate: {
			max: 4.0,
			min: 0.0
		}
	},
	name: {
		type: Sequelize.VIRTUAL,
		get () {
			return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName')
		}
	}
})

module.exports = {Student}
