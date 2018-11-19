//import React, {Component} from 'react';
//import {render} from 'react-dom';
import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="logo-block">
                    <img id="logo" src="img/w-mercury-development.svg"/>
                </div>
                <div className="main-block">
                    <LoginForm/>
                    <LogoutForm/>
                </div>
            </div>
        )
    }
}

render(
    React.createElement(App, null),
    document.getElementById("root")
);