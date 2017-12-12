import React from 'react'
import { connect } from 'react-redux'
import { writeStudent, postStudent, clearStudentEntry } from '../store'

const mapStateToProps = state => {
	return {
		newStudentEntry: state.newStudentEntry,
		campuses: state.campuses
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleChange: propertyName => event => {
			const newEntry = {
				[propertyName]: event.target.value
			}
			dispatch(writeStudent(newEntry))
		},
		handleSubmit: event => {
			event.preventDefault()
			const student = {
				firstName: event.target.firstName.value,
				lastName: event.target.lastName.value,
				email: event.target.email.value,
				gpa: event.target.gpa.value,
				campusName: event.target.campusName.value
			}
			dispatch(postStudent(student))
			dispatch(clearStudentEntry())
		}
	}
}

function NewStudentEntry(props) {
	return (
    <form onSubmit={props.handleSubmit}>
      <div>
		<h2>Add a Student</h2>
        <label> First Name:
	        <input
	          type="text"
	          name="firstName"
	          placeholder="Enter firstname"
	          value={props.newStudentEntry.firstname}
	          onChange={props.handleChange('firstname')}
	        />
        </label><br />
        <label> Last Name:
	        <input
	          type="text"
	          name="lastName"
	          placeholder="Enter lastname"
	          value={props.newStudentEntry.lastname}
	          onChange={props.handleChange('lastname')}
	        />
        </label><br />
        <label> Email:
	        <textarea
	          type="text"
	          name="email"
	          placeholder="Enter email"
	          value={props.newStudentEntry.email}
	          onChange={props.handleChange('email')}
	        />
        </label><br />
        <label> GPA:
	        <textarea
	          type="text"
	          name="gpa"
	          placeholder="Enter student's GPA"
	          value={props.newStudentEntry.gpa}
	          onChange={props.handleChange('gpa')}
	        />
        </label><br />
        <label> Select a Campus:
			<select name="campusName" value={props.newStudentEntry.campusname} onChange={props.handleChange('campusname')}>
			{
				props.campuses.map(campus => {
					return <option key={campus.id} value={campus.name}>{campus.name}</option>
				})
			}
			</select>
        </label>
      </div>
      <div>
        <button type="submit">
          Create Student
        </button>
      </div>
    </form>
  )
}

const NewStudentEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewStudentEntry)
export default NewStudentEntryContainer
