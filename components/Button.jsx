//import React, {Component} from 'react';

class Button extends Component {
    constructor(params) {
        super(props);
    }

    render(props) {
        return (
            <div className="center main-block__button">
                <input type="submit" value={props.value} className="main-block__button-field"/>
            </div>
        );
    }
}

export default Button