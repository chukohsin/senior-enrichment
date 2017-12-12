import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Campuses from './Campuses'
import Students from './Students'
import SingleCampus from './SingleCampus'
import SingleStudent from './SingleStudent'
import store, { fetchCampuses, fetchStudents } from '../store'
/* The code below does NOT relate to your project.
   This code is just a nice BIG example of how you can make a component.
   Also it is HILARIOUS :D Have fun!
 */

export default class Root extends Component {
  componentDidMount() {
    store.dispatch(fetchCampuses())
    store.dispatch(fetchStudents())
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/campuses" component={Campuses} />
              <Route path="/campuses/:campusId" component={SingleCampus} />
              <Route exact path="/students" component={Students} />
              <Route path="/students/:studentId" component={SingleStudent} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}
