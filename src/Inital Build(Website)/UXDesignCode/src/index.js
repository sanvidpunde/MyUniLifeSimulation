import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import CourseFinder from './views/course-finder'
import PsychometricTest from './views/psychometric-test'
import PsychometricTestOutput from './views/psychometric-test-output'
import OutputOftheRecommendor from './views/output-ofthe-recommendor'
import Preferenceoutput from './views/preferenceoutput'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={CourseFinder} exact path="/course-finder" />
        <Route component={PsychometricTest} exact path="/psychometric-test" />
        <Route
          component={PsychometricTestOutput}
          exact
          path="/psychometric-test-output"
        />
        <Route
          component={OutputOftheRecommendor}
          exact
          path="/output-ofthe-recommendor"
        />
        <Route component={Preferenceoutput} exact path="/preferenceoutput" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
