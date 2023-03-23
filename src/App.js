import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/general"> <News keys="general" pageSize={15} country={"in"} category="general" /></Route>
            <Route exact path="/business"> <News keys="business" pageSize={15} country={"in"} category="business" /></Route>
            <Route exact path="/entertainment"> <News keys="entertainment" pageSize={15} country={"in"} category="entertainment" /></Route>
            <Route exact path="/health"> <News  keys="health" pageSize={15} country={"in"} category="health" /></Route>
            <Route exact path="/science"> <News  keys="science" pageSize={15} country={"in"} category="science" /></Route>
            <Route exact path="/sports"> <News keys="sports" pageSize={15} country={"in"} category="sports" /></Route>
            <Route exact path="/technology"> <News keys="technology" pageSize={15} country={"in"} category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
