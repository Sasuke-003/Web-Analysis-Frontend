import React,{ Component } from "react";

class HospitalSignup extends Component{
    render(){
        return(
            <div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
				<h3>Hospital Sign Up</h3>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						
                        <input type="text" class="form-control" placeholder="Username">
						
                    </div>
                    <div class="input-group form-group">
						
                        <input type="text" class="form-control" placeholder="Email">
						
                    </div>
                    <div class="input-group form-group">
						
                        <input type="text" class="form-control" placeholder="Contact">
						
					</div>
					<div class="input-group form-group">
						
						<input type="password" class="form-control" placeholder="Password">
                    </div>
                    <div class="input-group form-group">
						
                        <input type="text" class="form-control" placeholder="Confirm Password">
						
					</div>
				<!----<div class="row align-items-center remember">
						<input type="checkbox">Remember Me
                    </div> -->
                    <br>
					<div class="form-group">
						<input type="submit" value="Sign Up" class="btn float-right login_btn">
					</div>
				</form>
			</div>
			</div>
		</div>
	</div>
</div>>
        )
    }
}

export default HospitalSignup;