//import React, {Component} from 'react';
import Button from './Button';

class LogoutnForm extends Component {
  constructor(params) {
    super(props);
    this.sendLogoutForm = sendLogoutForm.bind(this);
  }

  render(props) {
    return React.createElement("form", {
      id: "logout-form",
      onSubmit: this.sendLogoutForm,
      style: this.state.user ? "" : "display: none"
    }, React.createElement("div", {
      className: "main-block__avatar center"
    }, React.createElement("img", {
      id: "avatar",
      src: this.state.user ? this.state.user.photoUrl : ""
    })), React.createElement("div", {
      className: "main-block__nickname"
    }, React.createElement("p", {
      id: "nickname"
    }, this.state.user ? this.state.user.name : "")), React.createElement(Button, {
      value: "Logout"
    }));
  }

  sendLogoutForm() {
    this.setState({
      user: null
    });
  }

}

export default LogoutnForm;
