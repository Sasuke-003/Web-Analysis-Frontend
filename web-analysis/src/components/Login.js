import React,{ Component } from "react";
import axios from 'axios'
class Login extends Component{
	state ={
		email:null,
		password:null,
		token : null
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id] :  e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventdefault();
		const  user  = {
			email:this.state.email,
			password:this.state.password
		};
		this.setState({
			email : null,
			password : null,
			token : null
		});
		axios.post("http://192.168.42.220:9999/user/login",user).then(res => {
			if(res.data.code === 200 ){
				this.setState({
					token : res.data.token
				});
				console.log(this.state.token);
			}	
			else{
				alert("Invalid Email or Password");
			}
		}).catch(error => {
			console.log(error);
		})


	}
    render() {
        return(     
                <div className="d-flex justify-content-center h-100">
		        	<div className="card">
		        		<div className="card-header">
				    		<h3>Sign In</h3>
			        	</div>
			    		<div className="card-body">
							<form onSubmit={this.handleSubmit}>
								<div className="input-group form-group">
<<<<<<< HEAD
									<input type="text" className="form-control" placeholder="Username" required/>
								</div>
								<div className="input-group form-group">
									<input type="password" className="form-control"  placeholder="Password" required/>
=======
									<input type="text" className="form-control" id="email" placeholder="Email" onChange={this.handleChange}/>
								</div>
								<div className="input-group form-group">
									<input type="password" className="form-control"  id="password" placeholder="Password" onChange={this.handleChange}/>
>>>>>>> 9a653fc00b8fffb72d8d7b66a3bae946eb691ca2
								</div>
								<div className="form-group">
									<input type="submit" value="Login" className="btn float-right login_btn" id="login_btn"/>
								</div>
							</form>
						</div>
						<div className="card-footer">
							<div className="d-flex justify-content-center links">
								Don't have an account?<a href="#">Sign Up</a>
							</div>
						<div className="d-flex justify-content-center">
							<a href="#">Forgot your password?</a>
						</div>
					</div>  
				</div>
			</div>      
        )
    }
}

export default Login;