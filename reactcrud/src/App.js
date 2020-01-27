import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

import Insert from './pages/Insert';
import Edit from './pages/Edit';
import View from './pages/View';

import './App.css';



function App() {
  
    return (
      <Router>
        <div className ="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Cadastro Medicos</Link>
            <div className = "collapse navbar-collapse" id="navbarSupportedContent">
              <ul className ="navbar-nav mr-auto">
                <li className ="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/insert'} className="nav-link">Insert</Link>
                </li>
              </ul>
            </div>
          </nav>

            <h2> Bem vindo ao cadastro de medicos</h2>

            <Switch>
              <Route exact path = '/' component={ View} />
              <Route  path = '/insert' component={ Insert} />
              <Route path = '/edit/:id' component={ Edit} />
            </Switch>

        </div>
      </Router>
    );
  }


export default App;
