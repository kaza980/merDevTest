class App extends React.Component {
    constructor(props) {
        super(props);
        this.updateUser = this.updateUser.bind(this);

        this.state = {user:null}
    }

    render() {
        return (
            <div>
                <div className="logo-block">
                    <img id="logo" src="img/w-mercury-development.svg"/>
                </div>
                <div className="main-block">
                    <LoginForm user={this.state.user} updateUser={this.updateUser}/>
                    <LogoutForm user={this.state.user} updateUser={this.updateUser}/>
                </div>
            </div>
        )
    }

    updateUser(user) {
        this.setState({user: user});
    }
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.sendLoginForm = this.sendLoginForm.bind(this);
        this.state = {email: null, password: null, error: null}
    }

    render(props) {
        return (
            <form id="login-form" name="loginForm" onSubmit={this.sendLoginForm}
                  style={this.props.user ? {display: "none"} : null}>
                <div className="main-block__title">
                    <p>Log In</p>
                </div>
                <Input id="email" name="email" type="email" placeholder="E-mail" title="Enter Email"
                       value={this.state.email} onChange={this.handleChangeEmail}/>
                <Input id="password" name="password" type="password" placeholder="Password" title="Enter Password"
                       value={this.state.password} onChange={this.handleChangePassword}/>
                <div className="center" id="error-block" hidden={!this.state.error}>
                    <p id="error-message">{this.state.error}</p>
                </div>
                <Button value="Login"/>

            </form>
        );
    }

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    async sendLoginForm(event) {
        event.preventDefault();
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
            if (!rawResponse.ok)
                this.setState({
                    error: content.error
                })
            else {
                const user = content;
                this.props.updateUser(user);
                this.state.error = null;
                this.state.email = null;
                this.state.password = null;
            }
        }

        catch (err) {
            this.setState({
                error: err
            });
        }
    }
}

class LogoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.sendLogoutForm = this.sendLogoutForm.bind(this);
    }

    sendLogoutForm() {
        this.props.updateUser(null);
    }

    render(props) {
        return (
            <form id="logout-form" onSubmit={this.sendLogoutForm} style={this.props.user ? null : {display: "none"}}>
                <div className="main-block__avatar center">
                    <img id="avatar" src={this.props.user ? this.props.user.photoUrl : ""}/>
                </div>
                <div className="main-block__nickname">
                    <p id="nickname">{this.props.user ? this.props.user.name : ""}</p>
                </div>
                <Button value="Logout"/>
            </form>
        );
    }
}

function Input(props) {
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
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    );
}

function Button(props) {
    return (
        <div className="center main-block__button">
            <input type="submit" value={props.value} className="main-block__button-field"/>
        </div>
    );
}

ReactDOM.render(
    React.createElement(App, null),
    document.getElementById("root")
);