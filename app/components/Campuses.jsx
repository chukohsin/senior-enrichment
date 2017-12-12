import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import NewCampusEntry from './NewCampusEntry'
import { deleteCampus } from '../store'

const mapStateToProps = state => {
	return {
		campuses: state.campuses
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleClick: (campusId, index) => event => {
			const targetStudent = { campusId, index }
			dispatch(deleteCampus(targetStudent))
		}
	}
}

export function Campuses(props) {
	return (
		<div>
			<ul>
				{
					props.campuses.map((campus, index) => {
						return (
							<li key={campus.id}>
								<NavLink to={`/campuses/${campus.id}`}>{campus.name}</NavLink>
								<button onClick={props.handleClick(campus.id, index)}>X</button>
							</li>
						)
					})
				}
			</ul>
			<NewCampusEntry />
		</div>
	)
}

const CampusesContainer = connect(mapStateToProps, mapDispatchToProps)(Campuses)
export default CampusesContainer
