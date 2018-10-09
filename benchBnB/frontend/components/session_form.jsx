import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(feild){
    return (e) => this.setState({
      [feild]: e.currentTarget.value
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} >

          <h3>{this.props.formType}</h3>
          or {this.props.link}

          <ul>
            {this.props.errors.map((error)=>(
              <li>error</li>
            ))}
          </ul>

          <label>Username:
            <input type="text" onChange={this.update('username')} />
          </label>


          <label>Password:
            <input type="text" onChange={this.update('password')} />
          </label>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
