//import React, {Component} from 'react';
class Button extends Component {
  constructor(params) {
    super(props);
  }

  render(props) {
    return React.createElement("div", {
      className: "center main-block__button"
    }, React.createElement("input", {
      type: "submit",
      value: props.value,
      className: "main-block__button-field"
    }));
  }

}

export default Button;
