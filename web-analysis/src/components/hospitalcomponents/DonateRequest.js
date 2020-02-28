import React,{ Component } from "react";

class DonateRequest extends Component {
    render(){
        return(
            <div id="container">
            <h1 style="color:blue;">Donate Request</h1>
			<br/>
	<input style="color:red" type="text" id="name1"  name="name" value="" placeholder="Enter Blood Type" required /> <br/>
	 <input style="color:red" type="text" id="name2" name="phone" placeholder="Enter Search distance" required /><br/>	
	   <input style="color:red" type="text" id="name3" name="address" placeholder="Enter Time" required /><br/>
        <input style="color:red" type="text" id="name4" name="email" placeholder="Enter Amount" required /><br/>
        <button style="color:black;font-size:20px;" type="submit"id="submit1">Send</button>
    </div>
        )
    }
}


export default DonateRequest;