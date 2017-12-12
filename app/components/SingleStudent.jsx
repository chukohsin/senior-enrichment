import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import EditStudent from './EditStudent'

const mapStateToProps = state => {
	return {
		students: state.students,
		campuses: state.campuses
	}
}


export function singleStudent(props) {
	const targetStudent  = props.students.find(student => student.id === +props.match.params.studentId)
	const targetCampus = props.campuses.find(campus => campus.id === targetStudent.campusId)
	return (
		<div>
			<h1>{targetStudent.name}</h1>
			<h2>{targetStudent.email}</h2>
			<h3>GPA: {targetStudent.gpa}</h3>
			<span>This is my campus </span>
			<NavLink to={`/campuses/${targetCampus.id}`}>{targetCampus.name}</NavLink>
			<EditStudent studentId={targetStudent.id} />
		</div>
	)
}

const SingleStudentContainer = connect(mapStateToProps)(singleStudent)
export default SingleStudentContainer
