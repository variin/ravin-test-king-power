import React, { Component } from 'react'
import { connect } from 'react-redux';

import Post from './Post'
import EditComponent from './EditComponent'
class AllPost extends Component {
  render() {
    return (
      <div>
          <h1 className='post_heading'>All Posts</h1>
          {this.props.posts.map((post) => (
              <div key={post.id}>
              {post.editing? <EditComponent post={post} key={post.id}/> :  
              <Post key={post.id} post={post}/>
              }
              </div>
          ))}
  
      {/* <div className='post'>
      <table id="data">
        <tbody>          
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Mobile Phone</th>
            <th>Nationality</th>
            <th></th>
          </tr>
        </tbody>
        {this.props.posts.map((post)=> (
           <tbody key={post.id}>      
           <tr >
           <td>{post.fname} {post.lname}</td>
           <td></td>
           <td></td>
           <td></td>
           <td>
             <div className='control-buttons'>
               <button className='edit' onClick={()=> this.props.dispatch({ type: 'EDIT_POST', id: post.id})}>Edit</button>
               <button className='delete' onClick={()=> this.props.dispatch({ type: 'DELETE_POST', id: post.id})}>Delete</button>  
             </div>
           </td>
         </tr>
         </tbody>
        ))}
       

      </table>

      </div> */}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);