import React,{ Component } from "react";

class UserNavbar extends Component {
    render(){
        return(
            <div class="topnav">
            <a className="active" href="#user">Incomin Donation</a>
            <a href="#make">Make Donation</a>
            <a href="#accept">Accepted Donation</a>
            <a href="#profile">Profile</a>
          </div>
        )
    }
}

export default UserNavbar;