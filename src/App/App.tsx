import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage'

function App() {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2">
          <BrowserRouter>
            <Switch>
              <Route>
                <Route exact path='/' component={LoginPage} />
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
