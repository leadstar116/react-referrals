import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import HomePage from '../HomePage/HomePage'
import { history } from '../_helpers/history'

function App() {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2">
          <Router history={history}>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/register' component={RegisterPage} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
