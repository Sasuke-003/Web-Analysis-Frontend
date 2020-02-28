import React,{ Component } from "react";
import axios from 'axios'
class UserSignup extends Component{
	state={
		username: "",
		email:"",
		contact:"",
		cpassword:"",
		password:"",
		blood:""
	}
	onChange = (e) => {
		this.setState({
			[e.target.id]:e.target.value
		});
	}
	onSubmit = (e) => {
		e.preventDefault();
		
		if(this.state.username.length < 3){
			console.log(this.state.username)
			alert("username must more than 3 characters");
		}
		else if(!this.state.email.endsWith("@gmail.com") && !this.state.email.endsWith("@yahoo.com")){
			alert("email must be valid");
		}
		else if(this.state.contact.length != 10){
			alert("contact must be 10 numbers");
		}
		else if(this.state.cpassword != this.state.password){
			alert("Both passwords must be same");
		}
		else
		{
			var min =0,max=100;
			var lon = min + (Math.random() * (max-min));
			var lat = min + (Math.random() * (max-min));
			const  user  = {
				name:this.state.username,
				email:this.state.email,
				contact:this.state.contact,
				type:"d",
				blood:this.state.blood,
				password:this.state.password,
				lon:lon,
				lat:lat
			};
			this.setState({		
				name: "",
				email:"",
				contact:"",
				cpassword:"",
				blood:"",
				password:""
			});
			axios.post("http://192.168.71.48:9999/user/signup",user).then(res => {
				if(res.data.code === 200 ){
					window.location = "/Login";
				}	
				else{
					alert("some error occured");
				}
			}).catch(error => {
				console.log(error);
			})
		}
	}

    render(){
        return(
            <div className="container">
	            <div className="d-flex justify-content-center h-100">
		            <div className="card1">
			            <div className="card-header">
				            <h3>User Sign Up</h3>
			            </div>
			        	<div className="card-body">
				        	<form>
					        	<div className="input-group form-group">
									<input type="text" class="form-control" onChange={this.onChange} placeholder="Username" id="username" />
					        	</div>
                            	<div className="input-group form-group">
                               		<input type="text" className="form-control" onChange={this.onChange}  placeholder="Email" id="email"  />				
                            	</div>
                            	<div className="input-group form-group">
						        	<input type="text" className="form-control" onChange={this.onChange}  placeholder="Contact" id="contact"  />
                            	</div>
                            	<div className="input-group form-group">		
                                	<input type="text" className="form-control" onChange={this.onChange}  placeholder="Blood type" id="blood" />
    							</div>
	    						<div classname="input-group form-group">
									<input type="password" className="form-control" onChange={this.onChange}  placeholder="Password" id="password" />
                    			</div>
                    			<div classname="input-group form-group">
									<input type="text" className="form-control" onChange={this.onChange}  placeholder="Confirm Password" id="cpassword"/>
								</div>
								<div className="form-group">
									<input type="submit"  value="Sign Up" className="btn float-right login_btn" id="login_btn"/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
        )
    }
}

export default UserSignup;