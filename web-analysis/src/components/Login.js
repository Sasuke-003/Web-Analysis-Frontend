import React,{ Component } from "react";

class Login extends Component{
    render(){
        return(
            
                <div class="d-flex justify-content-center h-100">
		        <div class="card">
		        	<div class="card-header">
				    <h3>Sign In</h3>
			        </div>
			    <div class="card-body">
				    <form>
					    <div class="input-group form-group">
						
						<input type="text" class="form-control" placeholder="Username">
						
					</div>
					<div class="input-group form-group">
						
						<input type="password" class="form-control" placeholder="Password">
					</div>
				
					<div class="form-group">
						<input type="submit" value="Login" class="btn float-right login_btn">
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div class="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        token: state.token;
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch({ type : 'ADD_TOKEN', token:}); 
    }
}
export default Login;