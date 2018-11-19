//import React, {Component} from 'react';
//import {render} from 'react-dom';
import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("div", null, React.createElement("div", {
      className: "logo-block"
    }, React.createElement("img", {
      id: "logo",
      src: "img/w-mercury-development.svg"
    })), React.createElement("div", {
      className: "main-block"
    }, React.createElement(LoginForm, null), React.createElement(LogoutForm, null)));
  }

}

render(React.createElement(App, null), document.getElementById("root"));
