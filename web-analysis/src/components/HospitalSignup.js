import React,{ Component } from "react";
import axios from 'axios';

class HospitalSignup extends Component{
	state={
		username: "",
		email:"",
		contact:"",
		cpassword:"",
		password:""
	}
	onChange = (e) => {
		this.setState({
            [e.target.id]: e.target.value
		})
		console.log(e.target.value);
		console.log(e.target.id);
	}
	onSubmit = (e) => {
		e.preventDefault();
		
		if(false){
			console.log(this.state.username)
			alert("username must more than 3 characters");
		}
		else if(!this.state.email.endsWith("@gmail.com") && !this.state.email.endsWith("@yahoo.com")){
			alert("email must be valid");
		}
		else if(this.state.contact.length != 10){
			alert("email must be contact");
		}
		else if(this.state.cpassword != this.state.password){
			alert("Both passwords must be same");
		}
		else
		{
			const  user  = {
				username:this.state.username,
				email:this.state.email,
				contact:this.state.contact,
				cpassword:this.state.cpassword,
				password:this.state.password
			};
			this.setState({		
				username: "",
				email:"",
				contact:"",
				cpassword:"",
				password:""
			});
			axios.post("http://192.168.71.48:9999/user/signup",user).then(res => {
				if(res.data.code === 200 ){
					window.location = "/"
					console.log(this.state.token);
				}	
				else{
					alert("");
				}
			}).catch(error => {
				console.log(error);
			})
		}
	}

    render(){
        return(
             <div className="container">
			// 	<div className="d-flex justify-content-center h-100">
			// 		<div className="card">
			// 			<div className="card-header">
			// 				<h3>Hospital Sign Up</h3>
			// 			</div>
			// 			<div className="card-body">
			// 				<form onSubmit={this.onSubmit}>
			// 					<div className="input-group form-group">
			// 				       <input type="text" className="form-control" onChange={this.onChange} placeholder="Username"  required/>
						
            //         			</div>
            //         			<div className="input-group form-group">
			// 					    <input type="text" className="form-control" onChange={this.onChange}  placeholder="Email"   required/>
			// 					</div>
            //         			<div className="input-group form-group">
			// 						<input type="text" className="form-control" onChange={this.onChange}  placeholder="Contact" id="contact"  required/>
			// 					</div>
			// 					<div className="input-group form-group">
			// 						<input type="password" className="form-control" onChange={this.onChange}  placeholder="Password"   required/>
			// 					</div>
            //         			<div className="input-group form-group">
			// 						<input type="text" className="form-control" onChange={this.onChange}  placeholder="Confirm Password"  id="cpassword"  required/>
			// 					</div>
			// 					<br />
			// 					<div className="form-group">
			// 						<input type="submit" value="Sign Up" className="btn float-right login_btn" id="login_btn"/>
			// 					</div>
			// 				</form>
			// 			</div>
			// 		</div>
			// 	</div>
			 </div>
        )
    }
}

export default HospitalSignup;