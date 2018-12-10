import Panel from "./components/Panel.js";
import LoginForm from "./components/LoginForm.js";
import ProfileForm from "./components/ProfileForm.js";

export const UserContext = React.createContext({
  user: null,
  updateUser: () => {}
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateUser = this.updateUser.bind(this);
    this.state = { user: null, updateUser: this.updateUser };
  }

  updateUser(user) {
    this.setState({ user: user });
  }

  render() {
    return (
      <div>
        <div className="app-logo">
          <img class="app-logo__logo" src="img/w-mercury-development.svg" />
        </div>
        <UserContext.Provider value={this.state}>
          <Panel>
            {this.state.user ? (
              <ProfileForm updateUser={this.updateUser} />
            ) : (
              <LoginForm updateUser={this.updateUser} />
            )}
          </Panel>
        </UserContext.Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
