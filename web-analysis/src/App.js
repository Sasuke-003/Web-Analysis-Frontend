import React, { Component } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import HospitalSignup from './components/HospitalSignup';
import UserSignup from './components/UserSignup';
import HospitalRoot from './components/hospitalcomponents/HospitalRoot'

class App extends Component{
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route path="/hospitalroot" component={HospitalRoot} />
        <Route path="/Usignup" component={UserSignup} />
        <Route path="/Hsignup" component={HospitalSignup} />
        <Route path="/Login" component={Login} />
        </Switch>
        
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
