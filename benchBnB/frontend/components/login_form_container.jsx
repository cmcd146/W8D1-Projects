import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {login} from '../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: 'login',
    link: <Link to='/signup'>Sign Up</Link>
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
