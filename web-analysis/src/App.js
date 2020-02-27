import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import HospitalSignup from './components/HospitalSignup';

class App extends Component{
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <HospitalSignup />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
