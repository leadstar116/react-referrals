import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage'
import RegisterPage from '../RegisterPage/RegisterPage';

function App() {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2">
          <BrowserRouter>
            <Switch>
              <Route>
                <Route exact path='/' component={LoginPage} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/register' component={RegisterPage} />
                <Redirect from="*" to="/" />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
