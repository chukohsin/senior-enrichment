import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import EditCampus from './EditCampus'

const mapStateToProps = state => {
	return {
		campuses: state.campuses,
		students: state.students
	}
}


export function singleCampus(props) {
	const targetCampus  = props.campuses.find(campus => campus.id === +props.match.params.campusId)
	const selectedStudents = props.students.filter(student => student.campusId === targetCampus.id)
	return (
		<div>
			<h1>{targetCampus.name}</h1>
			<img src={targetCampus.imgUrl} alt="image" />
			<h3>{targetCampus.description}</h3>
			<span>List of Students: </span>
			<ul>
				{
					selectedStudents.map(student => {
						return (
							<li key={student.id}>
								<NavLink to={`/students/${student.id}`}>{student.name}</NavLink>
							</li>
						)
					})
				}
			</ul>
			<EditCampus campusId={targetCampus.id} />
		</div>
	)
}

const SingleCampusContainer = connect(mapStateToProps)(singleCampus)
export default SingleCampusContainer
