import React, { Component } from 'react'
import { connect } from 'react-redux';

class Post extends Component {
  render() {
    return (
      <div className='post'>
        <table id="data">
          <tbody>          
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Mobile Phone</th>
              <th>Nationality</th>
            </tr>
          </tbody>
          
          <tbody>          
            <tr>
            <td>{this.props.post.fname} {this.props.post.lname}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div className='control-buttons'>
                <button className='edit' onClick={()=> this.props.dispatch({ type: 'EDIT_POST', id:this.props.post.id})}>Edit</button>
                <button className='delete' onClick={()=> this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id})}>Delete</button>  
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect()(Post);