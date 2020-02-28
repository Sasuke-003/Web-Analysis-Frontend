import React,{ Component } from "react";
import HospitalNavbar from './HospitalNavbar';
import DonateRequest from './DonateRequest';
import DonationHistory from './DonationHistory';
import IncomingDonator from './IncomingDonator';
import AcceptedRequest from './AcceptedRequest';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import hhome from './hhome';
import { connect } from 'react-redux'

class HospitalRoot extends Component {

    
    render(){
        var {token} = this.props;
        console.log(token);
        return(
            <div>
            <HospitalNavbar />
            <Switch>
           
             <Route  path="/hospitalroot/donaterequest" component={DonateRequest} />
            <Route   path="/hospitalroot/donationhistory" component={DonationHistory} />
            <Route   path="/hospitalroot/incomingdonator" component={IncomingDonator} />
            <Route  path="/hospitalroot/acceptedrequest" component={AcceptedRequest} />
            <Route  path="/hospitalroot/incomingrequest" component={IncomingDonator} />
            </Switch>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
        
}

export default connect(mapStateToProps)(HospitalRoot);