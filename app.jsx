class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.logout = this.logout.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();

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
                this.setState({
                    user
                });
            }
        }

        catch (err) {
            this.setState({
                error: err
            });
        }
    }

    logout() {
        this.setState({
            user: null
        });
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

    render() {
        return (
            <div className="container">
                <div className="logo-block">
                    <img id="logo" src="img/w-mercury-development.svg"/>
                </div>
                <div className="main-block">
                    <form style={this.state.user ? {display: "none"} : null} id="login-form" name="loginForm"
                          onSubmit={this.handleSubmit}>
                        <div className="main-block__title">
                            <p>Log In</p>
                        </div>
                        <div className="center main-block__input">
                            <input
                                id="email"
                                className="main-block__input-field "
                                name="email"
                                type="email"
                                placeholder="E-mail" required
                                title="Enter Email"
                                onChange={this.handleChangeEmail}
                                value={this.state.email}/>
                        </div>
                        <div className="center main-block__input">
                            <input
                                id="password"
                                className="main-block__input-field"
                                name="password"
                                type="password"
                                placeholder="Password" required
                                title="Enter Password"
                                onChange={this.handleChangePassword}
                                value={this.state.password}/>
                        </div>
                        <div className="center" id="error-block" hidden={!this.state.error}>
                            <p id="error-message">{this.state.error}</p>
                        </div>
                        <div className="center main-block__button">
                            <input type="submit" value="Login" className="main-block__button-field"/>
                        </div>
                    </form>
                    <div id="logout-form" style={this.state.user ? null : {display: "none"}}>
                        <div className="main-block__avatar center">
                            <img id="avatar" src={this.state.user ? this.state.user.photoUrl : ""}/>
                        </div>
                        <div className="main-block__nickname">
                            <p id="nickname">{this.state.user ? this.state.user.name : ""}</p>
                        </div>
                        <div className="center main-block__button">
                            <input type="submit" onClick={this.logout} value="Logout"
                                   className="main-block__button-field"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    React.createElement(App, null),
    document.getElementById("root")
);
