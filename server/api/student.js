const studentRouter = require('express').Router()
const { Student, Campus } = require('../db/models')

studentRouter.get('/', (req, res, next) => {
	Student.findAll()
	.then(students => {
		res.json(students)
	})
	.catch(next)
})

studentRouter.get('/:studentId', (req, res, next) => {
	Student.findOne({
		where: {
			id: req.params.studentId
		}
	})
	.then(student => {
		res.json(student)
	})
	.catch(next)
})

studentRouter.post('/', (req, res, next) => {
	Student.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		gpa: req.body.gpa
	})
	.then(student => {
		Campus.findOne({
			where: {
				name: req.body.campusName
			}
		})
		.then(campus => {
			student.campusId = campus.id
			return student.save()
		})
		.then(updatedStudent => {
			res.json(updatedStudent)
		})
		.catch(err => console.log(err.message))
	})
	.catch(next)
})

studentRouter.put('/:studentId', (req, res, next) => {
	Student.findOne({
		where: {
			id: req.params.studentId
		}
	})
	.then(student => {
		return student.update(req.body)
	})
	.then(updatedStudent => {
		res.json(updatedStudent)
	})
	.catch(next)
})

studentRouter.delete('/:studentId', (req, res, next) => {
	Student.destroy({
		where: {
			id: req.params.studentId
		}
	})
	.then(() => {
		res.json("Deleted!")
	})
	.catch(next)
})


module.exports = studentRouter
