//ACTION
const WRITE_EDIT_CAMPUS = "WRITE_EDIT_CAMPUS"

//ACTION CREATOR
export function writeEditCampus(campus) {
	const action = { type: WRITE_EDIT_CAMPUS, campus }
	return action
}

//REDUCER

export default function campusReducer(state = "", action) {
	switch (action.type) {
		case "WRITE_EDIT_CAMPUS":
			return Object.assign({}, state, action.campus)

		default:
			return state
	}
}
