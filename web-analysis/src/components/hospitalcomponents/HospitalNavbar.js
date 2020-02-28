import React,{ Component } from "react";
import { Link, NavLink ,Switch } from 'react-router-dom'
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
  
  <switch>
    <Link to="/hospitalroot" onClick={this.onclick} id="dr">Donate Request</Link>
    <Link to="/hospitalroot" onClick={this.onclick} id="ar">Accepted Request</Link>
    <Link to="/hospitalroot" onClick={this.onclick} id="ir">Incoming Request</Link>
    <Link to="/hospitalroot" onClick={this.onclick} id="dh">Donation History</Link>
  </switch>
</div>
        )
    }
}

export default HospitalNavbar;