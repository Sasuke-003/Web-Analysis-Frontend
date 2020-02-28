import React,{ Component } from "react";
import { Link, NavLink  } from 'react-router-dom'
import './hospitalnav.css'


class HospitalNavbar extends Component {
    onclick = (e) =>{
        document.getElementById("dr").style.backgroundColor = "#333";
        document.getElementById("ar").style.backgroundColor = "#333";
        document.getElementById("ir").style.backgroundColor = "#333";
        document.getElementById("dh").style.backgroundColor = "#333";
        document.getElementById([e.target.id]).style.backgroundColor = "red";
    }
    render(){ 
        return(
            <div class="topnav">
    <Link  to="/hospitalroot/donaterequest" onClick={this.onclick} id="dr">Donate Request</Link>
    <Link to="/hospitalroot/acceptedrequest" onClick={this.onclick} id="ar">Accepted Request</Link>
    <Link to="/hospitalroot/incomingrequest" onClick={this.onclick} id="ir">Incoming Request</Link>
    <Link to="/hospitalroot/donationhistory" onClick={this.onclick} id="dh">Donation History</Link>

</div>
        )
    }
}

export default HospitalNavbar;