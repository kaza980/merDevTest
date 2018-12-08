import Panel from "./Panel";
import LoginForm from "./components/LoginForm";
import ProfileForm from "./components/ProfileForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateUser = this.updateUser.bind(this);

    this.state = { user: null };
  }

  updateUser(user) {
    this.setState({ user: user });
  }

  render() {
    return (
      <div>
        <div className="logo-block">
          <img id="logo" src="img/w-mercury-development.svg" />
        </div>
        <Panel>
          {this.state.user ? (
            <ProfileForm user={this.state.user} updateUser={this.updateUser} />
          ) : (
            <LoginForm user={this.state.user} updateUser={this.updateUser} />
          )}
        </Panel>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
