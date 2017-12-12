import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	return (
	<div>
		<h1>
			<NavLink to="/">HOME</NavLink>
		</h1>
		<h1>
			<NavLink to="/campuses">BEER SCHOOLS</NavLink>
		</h1>
		<h1>
			<NavLink to="/students">DRUNK STUDENTS</NavLink>
		</h1>
	</div>
	)
}
