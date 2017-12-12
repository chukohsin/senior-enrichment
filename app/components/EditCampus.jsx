import React from 'react'
import { connect } from 'react-redux'
import { putCampus, writeEditCampus } from '../store'

const mapStateToProps = state => {
	return {
		campuses: state.campuses,
		editCampusEntry: state.editCampusEntry
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleChange: propertyName => event => {
			const newEntry = {
				[propertyName]: event.target.value
			}
			dispatch(writeEditCampus(newEntry))
		},
		handleSubmit: (campusId, index) => event => {
			event.preventDefault()
			const targetCampus = {
				campusId,
				index,
				info: {
					name: event.target.name.value,
					imgUrl: event.target.imgUrl.value,
					description: event.target.description.value
				}
			}
			dispatch(putCampus(targetCampus))
			dispatch(writeEditCampus({
				name: '',
				imgUrl: '',
				description: ''
			}))
		}
	}
}

function EditCampus(props) {
	const targetCampus = props.campuses.find(campus => campus.id === +props.campusId)
	const targetCampusIndex = props.campuses.indexOf(targetCampus)
	return (
		<form onSubmit={props.handleSubmit(targetCampus.id, targetCampusIndex)}>
	      <div>
			<h2>Edit {targetCampus.name}</h2>
	        <label> Name:
		        <input
		          type="text"
		          name="name"
		          placeholder={targetCampus.name}
		          value={props.editCampusEntry.name}
		          onChange={props.handleChange('name')}
		        />
	        </label><br />
	        <label> imgUrl:
		        <input
		          type="text"
		          name="imgUrl"
		          placeholder={targetCampus.imgUrl}
		          value={props.editCampusEntry.imgUrl}
		          onChange={props.handleChange('imgUrl')}
		        />
	        </label><br />
	        <label> Description:
		        <textarea
		          type="text"
		          name="description"
		          placeholder={targetCampus.description}
		          value={props.editCampusEntry.description}
		          onChange={props.handleChange('description')}
		        />
	        </label><br />
	      </div>
	      <div>
	        <button type="submit">
	          Submit Edit
	        </button>
	      </div>
	    </form>
	)
}

const EditCampusContainer = connect(mapStateToProps, mapDispatchToProps)(EditCampus)
export default EditCampusContainer

