import { createStore, applyMiddleware, combineReducers } from 'redux'
//import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

import students from './students'
import campuses from './campuses'
import newCampusEntry from './newCampusEntry'
import newStudentEntry from './newStudentEntry'
import editStudentEntry from './editStudentEntry'
import editCampusEntry from './editCampusEntry'

const reducer = combineReducers({
	campuses,
	students,
	newCampusEntry,
	newStudentEntry,
	editStudentEntry,
	editCampusEntry
})

const store = createStore(
	reducer,
	applyMiddleware(thunkMiddleware, loggingMiddleware)
)

export default store

export * from './students'
export * from './campuses'
export * from './newCampusEntry'
export * from './newStudentEntry'
export * from './editStudentEntry'
export * from './editCampusEntry'
