import React,{ Component } from "react";

class UserSignup extends Component{
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
						
                                <input type="text" class="form-control" placeholder="Username" />
					        </div>
                            <div className="input-group form-group">
                                <input type="text" className="form-control" placeholder="Email" />				
                            </div>
                            <div className="input-group form-group">
						        <input type="text" className="form-control" placeholder="Contact" />
                            </div>
                            <div className="input-group form-group">		
                                <input type="text" className="form-control" placeholder="Blood type" />
    					</div>
	    				<div classname="input-group form-group">
						
						<input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div classname="input-group form-group">
						
                        <input type="text" className="form-control" placeholder="Confirm Password" />
						
					</div>
					<div className="form-group">
						<input type="submit"  value="Sign Up" className="btn float-right login_btn" />
					</div>
				</form>
			</div>
			</div>
		</div>
	</div>
</div>
        )
    }
}

export default UserSignup;