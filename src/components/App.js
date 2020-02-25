import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Forms from "./forms"
import SubmittedForm from "./submittedForm"

export default props => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Forms} />
        <Route path="/submittedForm" component={SubmittedForm} />
      </div>
    </Router>
  )
}
