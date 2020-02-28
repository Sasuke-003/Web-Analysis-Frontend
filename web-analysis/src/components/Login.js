import React,{ Component } from "react";
import axios from 'axios'
import { connect } from 'react-redux'

class Login extends Component{

	
	handleChange = (e) => {
		this.setState({
            [e.target.id]: e.target.value
		});
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			token : null
		});
		const  user  = {
			email:this.state.email,
			password:this.state.password
		};
		console.log(user);
		axios.post("http://192.168.71.48:9999/user/login",user).then(res => {
			if(res.data.code === 200 ){
				this.setState({
					token : res.data.data.token,
					type: res.data.data.type
				});
				this.props.adduser(res.data.data.token,res.data.data.type)
				console.log(this.props.toke);
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
									<input type="text" className="form-control" onChange={this.handleChange} placeholder="Username" id="email" required/>
								</div>
								<div className="input-group form-group">
									<input type="password" className="form-control"  onChange={this.handleChange} placeholder="Password" id="password" required/>
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
							<a >Forgot your password?</a>
						</div>
					</div>  
				</div>
			</div>      
		)
    }
}


const mapStateToProps = (state) =>{
	return{
			token: state.token,
			type: state.type
	}
		
}


const mapDispatchToProps = (dispatch) =>{
	return{
		adduser : (token,id) => { dispatch({type: 'ADD_TOKEN', token:token, id:id})}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);