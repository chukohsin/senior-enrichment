import axios from 'axios'


//ACTION TYPES
const GOT_CAMPUSES_FROM_SERVER = "GOT_CAMPUSES_FROM_SERVER"
const GET_CAMPUS = "GET_CAMPUS"
const DELETE_CAMPUS = "DELETE_CAMPUS"
const EDIT_CAMPUS = "EDIT_CAMPUS"

//ACTION CREATORS
export function gotCampusesFromServer(campuses) {
	const action = { type: GOT_CAMPUSES_FROM_SERVER, campuses }
	return action
}

export function getCampus(campus) {
	const action = { type: GET_CAMPUS, campus }
	return action
}

export function removeCampus(campusIndex) {
	const action = { type: DELETE_CAMPUS, campusIndex }
	return action
}

export function editCampus(editedCampus) {
	const action = { type: EDIT_CAMPUS, campus: editedCampus }
	return action
}

//THUNK CREATORS
export function fetchCampuses() {
	return function thunk(dispatch) {
		return axios
		.get("/api/campuses")
		.then(res => res.data)
		.then(campuses => {
			const action = gotCampusesFromServer(campuses)
			dispatch(action)
		})
	}
}

export function postCampus(campus) {
	return function thunk(dispatch) {
		return axios
		.post("/api/campuses", campus)
		.then(res => res.data)
		.then(newCampus => {
			console.log(newCampus)
			const action = getCampus(newCampus)
			dispatch(action)
		})
	}
}

export function deleteCampus(campus) {
	return function thunk(dispatch) {
		return axios
		.delete(`/api/campuses/${campus.campusId}`)
		.then(res => res.data)
		.then(() => {
			const action = removeCampus(campus.index)
			dispatch(action)
		})
	}
}

export function putCampus(campus) {
	return function thunk(dispatch) {
		return axios
		.put(`/api/campuses/${campus.campusId}`, campus.info)
		.then(res => res.data)
		.then(updatedCampus => {
			const editedCampus = { updatedCampus: updatedCampus, campusIndex: campus.index }
			const action = editCampus(editedCampus)
			dispatch(action)
		})
	}
}


//CAMPUSES REDUCER
export default function campusesReducer(state = [], action) {
	switch (action.type) {
		case GOT_CAMPUSES_FROM_SERVER:
			return action.campuses

		case GET_CAMPUS:
			return [...state, action.campus]

		case DELETE_CAMPUS:
			return [...state.slice(0, action.campusIndex), ...state.slice(action.campusIndex + 1)]

		case EDIT_CAMPUS:
			return [...state.slice(0, action.campus.campusIndex), action.campus.updatedCampus, ...state.slice(action.campus.campusIndex + 1)]

		default:
			return state
	}
}
