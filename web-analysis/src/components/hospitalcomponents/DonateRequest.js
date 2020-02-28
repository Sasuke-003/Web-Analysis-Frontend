import React,{ Component } from "react";
import './DonateRequest.css'
class DonateRequest extends Component {
    render(){
        return(
            <div id="container">
            <h1 >Donate Request</h1>
			<br/>
	<input  type="text" id="name1"  name="name" value="" placeholder="Enter Blood Type" required /> <br/>
	 <input  type="text" id="name2" name="phone" placeholder="Enter Search distance" required /><br/>	
	   <input  type="text" id="name3" name="address" placeholder="Enter Time" required /><br/>
        <input  type="text" id="name4" name="email" placeholder="Enter Amount" required /><br/>
        <button  type="submit"id="submit1">Send</button>
    </div>
        )
    }
}


export default DonateRequest;