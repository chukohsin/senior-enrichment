import React from 'react'
import { connect } from 'react-redux'
import { writeCampus, postCampus } from '../store'

const mapStateToProps = state => {
	return {
		newCampusEntry: state.newCampusEntry
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleChange: propertyName => event => {
			const newEntry = {
				[propertyName]: event.target.value
			}
			dispatch(writeCampus(newEntry))
		},
		handleSubmit: event => {
			event.preventDefault()
			const campus = {
				name: event.target.campusName.value,
				imgUrl: event.target.campusImgUrl.value,
				description: event.target.campusDescription.value
			}
			dispatch(postCampus(campus))
		}
	}
}

function NewCampusEntry(props) {
	return (
    <form onSubmit={props.handleSubmit}>
      <div>
		<h2>Create a Campus</h2>
        <label> Campus Name:
	        <input
	          type="text"
	          name="campusName"
	          placeholder="Enter campus name"
	          value={props.newCampusEntry.name}
	          onChange={props.handleChange('name')}
	        />
        </label><br />
        <label> Campus ImageUrl:
	        <input
	          type="text"
	          name="campusImgUrl"
	          placeholder="Enter campus imageUrl"
	          value={props.newCampusEntry.imgUrl}
	          onChange={props.handleChange('imgUrl')}
	        />
        </label><br />
        <label> Campus Description:
	        <textarea
	          type="text"
	          name="campusDescription"
	          placeholder="Enter campus description"
	          value={props.newCampusEntry.description}
	          onChange={props.handleChange('description')}
	        />
        </label>
      </div>
      <div>
        <button type="submit">
          Create Campus
        </button>
      </div>
    </form>
  )
}

const NewCampusEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewCampusEntry)
export default NewCampusEntryContainer
