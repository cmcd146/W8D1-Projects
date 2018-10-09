import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = (props) => {
  if (props.currentUser) {
    return (
      <div>
        <h2>Hello, {props.currentUser.username}!</h2>
        <button onClick={props.logout}>Logout</button>
      </div>
    )
  }
  return (
    <div>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default Greeting;
