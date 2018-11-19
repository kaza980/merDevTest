//import React, {Component} from 'react';

class Input extends Component {
    constructor(params) {
        super(props);

        this.handleChangeInput = handleChangeInput.bind(this);
    }

    render(props) {
        return (
            <div className="center main-block__input">
                <input
                    id={props.id}
                    className="main-block__input-field "
                    name={props.name}
                    type={props.type}
                    placeholder={props.placeholder}
                    required
                    title={props.title}
                    onChange={this.handleChangeInput}
                    value={this.state.value}
                />
            </div>
        );
    }

    handleChangeInput(e) {
        this.setState({
            value: e.target.value
        });
    }
}

export default Input