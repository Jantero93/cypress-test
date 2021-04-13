import React from 'react';
import Display from './Display';

export default class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
  };

  changeName = (e) => {
    console.log('name', e);
    this.setState({
      firstName: e.target.value,
    });
  };

  changeLast = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  changeUser = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  onSubmit = (e) => {
    console.log('e', e);
    console.log('name', this.state.firstName);
    console.log('lastname', this.state.lastName);
    console.log('user', this.state.userName);
  };

  render() {
    return (
      <div>
        <div>
          <form>
            <input
              name="firstName"
              placeholder="First name"
              value={this.state.firstName}
              onChange={(e) => this.changeName(e)}
            />
            <br />
            <input
              name="lastName"
              placeholder="Last name"
              value={this.state.lastName}
              onChange={(e) => this.changeLast(e)}
            />
            <br />
            <input
              name="username"
              placeholder="Username"
              value={this.state.userName}
              onChange={(e) => this.changeUser(e)}
            />
            <br />
            <button onClick={(e) => this.onSubmit(e)}>Submit</button>
          </form>
        </div>
        <Display
          firstName={this.state.firstName}
          userName={this.state.userName}
          lastName={this.state.lastName}
        />
      </div>
    );
  }
}
