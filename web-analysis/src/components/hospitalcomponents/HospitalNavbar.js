import React,{ Component } from "react";

class hospitalNavbar extends Component {
    render(){
        return(
            <div class="topnav">
  <a className="active" href="#donate">Donate Request</a>
  <a href="#acceopt">Accepted Request</a>
  <a href="#income">Incoming Request</a>
  <a href="#history">Donation History</a>
</div>
        )
    }
}

export default HospitalNavbar;