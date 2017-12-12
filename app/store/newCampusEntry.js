//ACTION TYPE
const WRITE_CAMPUS = "WRITE_CAMPUS"

//ACTION CREATOR
export function writeCampus(campus) {
	const action = { type: WRITE_CAMPUS, campus}
	return action
}

//REDUCER
export default function campusReducer(state = {}, action) {
	switch (action.type) {
		case WRITE_CAMPUS:
			return Object.assign({}, state, action.campus)

		default:
			return state
	}
}
