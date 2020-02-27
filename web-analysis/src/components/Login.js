import React,{ Component } from "react";

class Login extends Component{
    render() {
        return(     
                <div className="d-flex justify-content-center h-100">
		        	<div className="card">
		        		<div className="card-header">
				    		<h3>Sign In</h3>
			        	</div>
			    		<div className="card-body">
							<form>
								<div className="input-group form-group">
									<input type="text" className="form-control" placeholder="Username" required/>
								</div>
								<div className="input-group form-group">
									<input type="password" className="form-control"  placeholder="Password" required/>
								</div>
								<div className="form-group">
									<input type="submit" value="Login" className="btn float-right login_btn" />
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