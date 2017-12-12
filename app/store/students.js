import axios from 'axios'

//ACTIONS
const GOT_STUDENTS_FROM_SERVER = "GOT_STUDENTS_FROM_SERVER"
const GET_STUDENT = "GET_STUDENT"
const DELETE_STUDENT = "DELETE_STUDENT"
const EDIT_STUDENT = "EDIT_STUDENT"

//ACTION CREATORS
export function gotStudentsFromServer(students) {
	const action = { type: GOT_STUDENTS_FROM_SERVER, students }
	return action
}

export function getStudent(student) {
	const action = { type: GET_STUDENT, student }
	return action
}

export function removeStudent(studentIndex) {
	const action = { type: DELETE_STUDENT, studentIndex }
	return action
}

export function editStudent(editedStudent) {
	const action = { type: EDIT_STUDENT, student: editedStudent }
	return action
}


//THUNK CREATORS
export function fetchStudents() {
	return function thunk(dispatch) {
		return axios
		.get('/api/students')
		.then(res => res.data)
		.then(students => {
			const action = gotStudentsFromServer(students)
			dispatch(action)
		})
		.catch(err => console.log("Err from fetchStudents thunk: ", err))
	}
}

export function postStudent(student) {
	return function thunk(dispatch) {
		return axios
		.post('/api/students', student)
		.then(res => res.data)
		.then(newStudent => {
			const action = getStudent(newStudent)
			dispatch(action)
		})
		.catch(err => console.log("Err from postStudent thunk: ", err))
	}
}

export function deleteStudent(student) {
	return function thunk(dispatch) {
		return axios
		.delete(`/api/students/${student.studentId}`)
		.then(res => res.data)
		.then(() => {
			const action = removeStudent(student.index)
			dispatch(action)
		})
	}
}

export function putStudent(student) {
	return function thunk(dispatch) {
		return axios
		.put(`/api/students/${student.studentId}`, student.info)
		.then(res => res.data)
		.then(updatedStudent => {
			const editedStudent = { updatedStudent: updatedStudent, studentIndex: student.index }
			const action = editStudent(editedStudent)
			dispatch(action)
		})
	}
}

//REDUCER
export default function studentsReducer(state = [], action) {
	switch (action.type) {
		case GOT_STUDENTS_FROM_SERVER:
			return action.students

		case GET_STUDENT:
			return [...state, action.student]

		case DELETE_STUDENT:
			return [...state.slice(0, action.studentIndex), ...state.slice(action.studentIndex + 1)]

		case EDIT_STUDENT:
			return [...state.slice(0, action.student.studentIndex), action.student.updatedStudent, ...state.slice(action.student.studentIndex + 1)]

		default:
			return state
	}
}

