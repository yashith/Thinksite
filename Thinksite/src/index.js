import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ParallaxProvider } from 'react-scroll-parallax';
import Signup from './Components/signup'
import Login from './Components/login'
import Dashboard from './Components/Dashboard/dashboard'
ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      
      {/* <Signup/> */}
      {/* <Login/> */}
      <Router>
        <Switch>
          <Route  path='/' exact component={App}/>
          <Route  path='/signup'  component={Signup}/>
          <Route  path='/login'  component={Login}/>
          <Route  path='/user' component={Dashboard}/>
        </Switch>
        
      </Router>
    </ParallaxProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
