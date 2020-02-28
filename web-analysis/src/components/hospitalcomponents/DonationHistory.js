import React,{ Component } from "react";
import './History.css';

class DonationHistory extends Component {
    render(){
        return(
          <div>
            <div className="container">
              <h2 >Requested Donation</h2>            
                <table className="table table-bordered" >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Contact</th>
                    <th>Blood group</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody >
                  <tr >
                  <td></td>
                  <td></td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  </tr>
                  <tr >
                  <td></td>
                  <td></td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
            
                  </tr>
                  <tr >
                  <td></td>
                  <td></td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
            
                  </tr>     <tr >
                  <td></td>
                  <td></td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
            
                  </tr>
    </tbody>
  </table>
  
  
  </div>
  



    <div className="container">
      <h2 >User Donation</h2>            
      <table className="table table-bordered" >
        <thead>
        <tr>
          <th>Name</th>
          <th>E-mail</th>
          <th>Contact</th>
          <th>Blood group</th>
          <th>Date</th>
        </tr>
      </thead>
    <tbody >
      <tr >
        <td></td>
        <td></td>
        <td> </td>
        <td> </td>
        <td> </td>
        
      </tr>
      <tr >
        <td></td>
        <td></td>
        <td> </td>
        <td> </td>
        <td> </td>
        
      </tr>
      <tr >
        <td></td>
        <td></td>
        <td> </td>
        <td> </td>
        <td> </td>
        
      </tr>
    </tbody>
  </table>
  </div>
  </div>

        )
    }
}

export default DonationHistory;