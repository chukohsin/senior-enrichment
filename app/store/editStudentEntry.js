//ACTION
const WRITE_EDIT_STUDENT = "WRITE_EDIT_STUDENT"

//ACTION CREATOR
export function writeEditStudent(student) {
	const action = { type: WRITE_EDIT_STUDENT, student }
	return action
}

//REDUCER

export default function studentReducer(state = "", action) {
	switch (action.type) {
		case "WRITE_EDIT_STUDENT":
			return Object.assign({}, state, action.student)

		default:
			return state
	}
}
