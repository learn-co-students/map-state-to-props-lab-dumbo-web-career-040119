import React, { Component } from 'react';
import {connect} from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map((user,ind) => <li key={ind}>{user.username}</li>)
    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
