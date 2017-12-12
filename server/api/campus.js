const campusRouter = require('express').Router()
const { Campus } = require('../db/models')

campusRouter.get('/', (req, res, next) => {
	Campus.findAll()
	.then(campuses => {
		res.json(campuses)
	})
	.catch(next)
})

campusRouter.get('/:campusId', (req, res, next) => {
	Campus.findOne({
		where: {
			id: req.params.campusId
		}
	})
	.then(campus => {
		res.json(campus)
	})
	.catch(next)
})

campusRouter.post('/', (req, res, next) => {
	Campus.create({
		name: req.body.name,
		imgUrl: req.body.imgUrl,
		description: req.body.description
	})
	.then(campus => res.json(campus))
	.catch(next)
})

campusRouter.put('/:campusId', (req, res, next) => {
	Campus.findOne({
		where: {
			id: req.params.campusId
		}
	})
	.then(campus => {
		return campus.update(req.body)
	})
	.then(updatedCampus => {
		res.json(updatedCampus)
	})
	.catch(next)
})

campusRouter.delete('/:campusId', (req, res, next) => {
	Campus.destroy({
		where: {
			id: req.params.campusId
		}
	})
	.then(() => {
		res.json("Deleted!")
	})
	.catch(next)
})

module.exports = campusRouter
