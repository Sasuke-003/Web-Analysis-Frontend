import React,{ Component } from "react";

class Login extends Component{
    render(){
        return(
            <div>
                
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