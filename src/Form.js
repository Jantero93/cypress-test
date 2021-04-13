import React from 'react';

export default class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    endValue: '',
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
    let tempFirstName = Number(this.state.firstName);
    let tempUserName = Number(this.state.userName);

    e.preventDefault();

    switch (this.state.lastName) {
      case '+':
        console.log('at +', tempFirstName, tempUserName);
        this.setState({
          endValue: tempFirstName + tempUserName,
        });
        break;
      case '-':
        console.log('at -', tempFirstName, tempUserName);
        this.setState({
          endValue: tempFirstName - tempUserName,
        });
        break;
      case '*':
        console.log('at *', tempFirstName, tempUserName);
        this.setState({
          endValue: tempFirstName * tempUserName,
        });
        break;
      case '/':
        console.log('at /', tempFirstName, tempUserName);
        this.setState({
          endValue: tempFirstName / tempUserName,
        });
        break;
      default:
        this.setState({
          endValue: 'virhe',
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <div>
          <form>
            <input
              name="firstName"
              placeholder="Value"
              value={this.state.firstName}
              onChange={(e) => this.changeName(e)}
            />
            <br />
            <input
              name="lastName"
              placeholder="Operation (+-*/)"
              value={this.state.lastName}
              onChange={(e) => this.changeLast(e)}
            />
            <br />
            <input
              name="username"
              placeholder="Value"
              value={this.state.userName}
              onChange={(e) => this.changeUser(e)}
            />
            <br />
            <button onClick={(e) => this.onSubmit(e)}>calculate</button>
          </form>
        </div>
        <div>
          <h1>{this.state.firstName}</h1>
          <h1>{this.state.lastName}</h1>
          <h1>{this.state.userName}</h1>
          <h1>{this.state.endValue}</h1>
        </div>
      </div>
    );
  }
}
