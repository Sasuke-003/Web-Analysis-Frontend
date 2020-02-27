import React,{ Component } from "react";

class IncomingDonator extends Component {
    render(){
        return(
            <div className="container">
                <h2>Modal Example</h2>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                    Open modal
                </button>
                <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" bg-black>Request for blood !..</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
          Hospital need blood,Emergency.
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Accept</button>
          <button type="button" className="btn btn-danger" data-dismiss="modal">Reject</button>
        </div>
        
      </div>
    </div>
  </div>
  
</div>
        )
    }
}


export default IncomingDonator;