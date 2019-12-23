import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';

import NavBar from './components/navbar/NavBarComponent'
import LoginComponent from './components/login/LoginContainer';

import UserViewComponent from './components/UserViewComponent';
import AdminViewComponent from './components/AdminViewComponent';
import FMViewComponent from './components/FMViewComponent';
const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <nav>
            <NavBar />
          </nav>

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Switch>
              <Route path='/login' component={LoginComponent} />
              <Route path='/user' component={UserViewComponent} />
              <Route path='/admin' component={AdminViewComponent} />
              <Route path='/finance' component={FMViewComponent} />
            </Switch>
          </header>

        </Router>
      </Provider>
    </div>
  );
}

export default App;
