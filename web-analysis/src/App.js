import React, { Component } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import HospitalSignup from './components/HospitalSignup';
import UserSignup from './components/UserSignup';
import HospitalRoot from './components/hospitalcomponents/HospitalRoot'
import DonateRequest from './components/hospitalcomponents/DonateRequest';
import DonationHistory from './components/hospitalcomponents/DonationHistory';
import IncomingDonator from './components/hospitalcomponents/IncomingDonator';
import AcceptedRequest from './components/hospitalcomponents/AcceptedRequest';

class App extends Component{
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          
          <Route path="/Usignup" component={UserSignup} />
          <Route path="/Hsignup" component={HospitalSignup} />
          <Route path="/Login" component={Login} />
          <Route path="/hospitalroot/:token" component={HospitalRoot} />
        </Switch>
      
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
