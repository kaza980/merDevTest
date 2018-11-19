//import React, {Component} from 'react';
import Input from './Input'
import Button from './Button'

class LoginForm extends Component {
    constructor(params) {
        super(props);
        this.sendLoginForm = sendLoginForm.bind(this);
    }

    render(props) {
        return (
            <form id="login-form" name="loginForm" onSubmit="this.sendLoginForm; return false" style={this.state.user ? {display: "none"} : null}>
                <Input id="email" name = "email" type="email" placeholder="E-mail" title="Enter Email"/>
                <Input id="password" name = "password" type="password" placeholder="Password" title="Enter Password"/>

                <div className="center" id="error-block" hidden={!this.state.error}>
                    <p id="error-message">{this.state.error}</p>
                </div>

                <Button value="Login"/>
            </form>
        );
    }

    async sendLoginForm(){
        try {
            const rawResponse = await fetch('https://us-central1-mercdev-academy.cloudfunctions.net/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            });
            const content = await rawResponse.json();
            if(!rawResponse.ok)
                this.setState({
                    error: "Error: "+content.error
                })
            else
                this.setState({
                    user: content
                })
        }
        catch (e) {
            this.setState({
                error: "Error: "+e
            })
        }
    }

}

export default LoginForm