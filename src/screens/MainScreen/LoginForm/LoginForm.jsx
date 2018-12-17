import { Input } from "../../../components/Input/Input.jsx";
import { Button } from "../../../components/Button/Button.jsx";
import generalStyles from "../../../assets/style/style.css";
import styles from "./LoginForm.css";
import classNames from 'classnames';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.sendLoginForm = this.sendLoginForm.bind(this);
    this.state = { email: null, password: null, error: null };
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
      const rawResponse = await fetch(
        "https://us-central1-mercdev-academy.cloudfunctions.net/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password
          })
        }
      );
      const content = await rawResponse.json();
      if (!rawResponse.ok)
        this.setState({
          error: content.error
        });
      else {
        const user = content;
        this.props.updateUser(user);
        this.setState({
          error: null,
          email: null,
          password: null
        });
      }
    } catch (err) {
      this.setState({
        error: err
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.sendLoginForm}>
        <div className={styles["login-form"]}>
          <p>Log In</p>
        </div>
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          title="Enter Email"
          value={this.state.email}
          onChange={this.handleChangeEmail}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          title="Enter Password"
          value={this.state.password}
          onChange={this.handleChangePassword}
        />
        <div
          className={classNames(generalStyles.center, styles["login-form__error-block"])}
          hidden={!this.state.error}
        >
          <p>{this.state.error}</p>
        </div>
        <Button value="Login" />
      </form>
    );
  }
}
