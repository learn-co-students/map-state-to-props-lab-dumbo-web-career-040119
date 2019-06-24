import React, { Component } from 'react';
import { stat } from 'fs';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    // debugger
    return (
      <div>
        {this.props.users.length}
        <ul>
          {this.props.users.map(user => {
            return <li>{user.username}</li>
          })}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

function mapStateToProps(state){
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
