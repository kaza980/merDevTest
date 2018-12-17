import Panel from "./Panel/Panel.jsx";
import LoginForm from "./LoginForm/LoginForm.jsx";
import ProfileForm from "./ProfileForm/ProfileForm.jsx";
import styles from "./MainScreen.css";

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
          <img className={styles["app-logo__logo"]} src="./src/assets/img/w-mercury-development.svg" />
        </div>
        <UserContext.Provider value={this.state}>
          <Panel>
            {this.state.user ? (
              <ProfileForm updateUser={this.updateUser} />
            ) : (
              <LoginForm updateUser={this.updateUser}/>
            )}
          </Panel>
        </UserContext.Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
