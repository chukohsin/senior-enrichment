//ACTION
const WRITE_STUDENT = "WRITE_STUDENT"
const CLEAR_STUDENT_ENTRY = "CLEAR_STUDENT_ENTRY"

//ACTION CREATOR
export function writeStudent(student) {
	const action = { type: WRITE_STUDENT, student }
	return action
}

export function clearStudentEntry() {
	const action = { type: CLEAR_STUDENT_ENTRY }
	return action
}

//REDUCER

export default function studentReducer(state = "", action) {
	switch (action.type) {
		case "WRITE_STUDENT":
			return Object.assign({}, state, action.student)

		case "CLEAR_STUDENT_ENTRY":
			return ""

		default:
			return state
	}
}
