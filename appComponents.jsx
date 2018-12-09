import Panel from "./components/Panel.js";
import LoginForm from "./components/LoginForm.js";
import ProfileForm from "./components/ProfileForm.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateUser = this.updateUser.bind(this);
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
              <ProfileForm
              />
            ) : (
              <LoginForm/>
            )}
          </Panel>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
