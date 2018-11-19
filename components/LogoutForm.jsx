//import React, {Component} from 'react';
import Button from './Button'

class LogoutnForm extends Component {
    constructor(params) {
        super(props);
        this.sendLogoutForm = sendLogoutForm.bind(this);
    }

    render(props) {
        return (
            <form id="logout-form" onSubmit={this.sendLogoutForm} style={this.state.user ? null : {display: "none"}}>
                <div className="main-block__avatar center">
                    <img id="avatar" src = {this.state.user ? this.state.user.photoUrl : ""}/>
                </div>
                <div className="main-block__nickname">
                    <p id="nickname">{this.state.user? this.state.user.name : ""}</p>
                </div>
                <Button value="Logout"/>
            </form>
        );
    }

    sendLogoutForm() {
        this.setState({user: null, error:null})
    }
}

export default LogoutnForm