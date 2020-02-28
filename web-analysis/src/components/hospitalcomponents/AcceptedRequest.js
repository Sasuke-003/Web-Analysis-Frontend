import React,{ Component } from "react";

class AcceptedRequest extends Component {
    render(){
        return(
            <div class="container">
  <h2 style="background-color: black;color: brown;">Accepted requests</h2>            
  <table class="table table-bordered" style="border-collapse:separate;counter-increment: inherit;background-color: khaki;right: gap 50px;;">
    <thead>
      <tr>
        <th>Name</th>
        <th>E-mail</th>
        <th>Contact</th>
      </tr>
    </thead>
    <tbody style="row-gap: 50px">
      <tr >
        <td></td>
        <td></td>
        <td> </td><!--email-->
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
    </tbody>
  </table>
</div>
        )
    }
}

export default AcceptedRequest;