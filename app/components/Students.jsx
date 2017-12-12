import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import NewStudentEntry from './NewStudentEntry'
import { deleteStudent } from '../store'

const mapStateToProps = state => {
	return {
		students: state.students
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleClick: (studentId, index) => event => {
			const targetStudent = { studentId, index }
			dispatch(deleteStudent(targetStudent))
		}
	}
}

export function Students(props) {
	return (
		<div>
			<ul>
				{
					props.students.map((student, index) => {
						return (
							<li key={student.id}>
								<NavLink to={`/students/${student.id}`}>{student.name}</NavLink>
								<button onClick={props.handleClick(student.id, index)}>X</button>
							</li>
						)
					})
				}
			</ul>
			<NewStudentEntry />
		</div>
	)
}

const StudentsContainer = connect(mapStateToProps, mapDispatchToProps)(Students)
export default StudentsContainer

