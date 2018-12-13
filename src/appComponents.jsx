import Panel from "./Panel.jsx";
import LoginForm from "./LoginForm.jsx";
import ProfileForm from "./ProfileForm.jsx";
import styles from "../style.css";

export const UserContext = React.createContext({
  user: null,
  updateUser: () => {}
});

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
        <div className={styles["app-logo"]}>
          <img class={styles["app-logo__logo"]} src="../img/w-mercury-development.svg" />
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
