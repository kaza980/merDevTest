//import React, {Component} from 'react';
class Input extends Component {
  constructor(params) {
    super(props);
    this.handleChangeInput = handleChangeInput.bind(this);
  }

  render(props) {
    return React.createElement("div", {
      className: "center main-block__input"
    }, React.createElement("input", {
      id: props.id,
      className: "main-block__input-field ",
      name: props.name,
      type: props.type,
      placeholder: props.placeholder,
      required: true,
      title: props.title,
      onChange: this.handleChangeInput,
      value: this.state.value
    }));
  }

  handleChangeInput(e) {
    this.setState({
      value: e.target.value
    });
  }

}

export default Input;
