import React from 'react'
import { connect } from 'react-redux'
import { putStudent, writeEditStudent } from '../store'

const mapStateToProps = state => {
	return {
		students: state.students,
		campuses: state.campuses,
		editStudentEntry: state.editStudentEntry
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleChange: propertyName => event => {
			const newEntry = {
				[propertyName]: event.target.value
			}
			dispatch(writeEditStudent(newEntry))
		},
		handleSubmit: (studentId, index) => event => {
			event.preventDefault()
			const targetStudent = {
				studentId,
				index,
				info: {
					firstName: event.target.firstName.value,
					lastName: event.target.lastName.value,
					email: event.target.email.value,
					gpa: event.target.gpa.value,
					campusName: event.target.campusName.value
				}
			}
			dispatch(putStudent(targetStudent))
			dispatch(writeEditStudent({
				firstName: '',
				lastName: '',
				email: '',
				gpa: '',
				campusName: ''
			}))
		}
	}
}

function EditStudent(props) {
	const targetStudent = props.students.find(student => student.id === +props.studentId)
	const targetStudentIndex = props.students.indexOf(targetStudent)
	return (
		<form onSubmit={props.handleSubmit(targetStudent.id, targetStudentIndex)}>
	      <div>
			<h2>Edit {targetStudent.name}</h2>
	        <label> First Name:
		        <input
		          type="text"
		          name="firstName"
		          placeholder={targetStudent.firstName}
		          value={props.editStudentEntry.firstName}
		          onChange={props.handleChange('firstName')}
		        />
	        </label><br />
	        <label> Last Name:
		        <input
		          type="text"
		          name="lastName"
		          placeholder={targetStudent.lastName}
		          value={props.editStudentEntry.lastName}
		          onChange={props.handleChange('lastName')}
		        />
	        </label><br />
	        <label> Email:
		        <textarea
		          type="text"
		          name="email"
		          placeholder={targetStudent.email}
		          value={props.editStudentEntry.email}
		          onChange={props.handleChange('email')}
		        />
	        </label><br />
	        <label> GPA:
		        <textarea
		          type="text"
		          name="gpa"
		          placeholder={targetStudent.gpa}
		          value={props.editStudentEntry.gpa}
		          onChange={props.handleChange('gpa')}
		        />
	        </label><br />
	        <label> Select a Campus:
				<select name="campusName" value={props.editStudentEntry.campusName} onChange={props.handleChange('campusName')}>
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
	          Submit Edit
	        </button>
	      </div>
	    </form>
	)
}

const EditStudentContainer = connect(mapStateToProps, mapDispatchToProps)(EditStudent)
export default EditStudentContainer
