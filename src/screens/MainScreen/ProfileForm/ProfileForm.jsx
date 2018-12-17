import { Button } from "../../../components/Button/Button.jsx";
import { UserContext } from "../MainScreen.jsx";
import generalStyles from "../../../assets/style/style.css";
import styles from "./ProfileForm.css";
import classNames from 'classnames';

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.sendProfileForm = this.sendProfileForm.bind(this);
  }

  sendProfileForm() {
    this.props.updateUser(null);
  }

  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <form onSubmit={this.sendProfileForm}>
            <div className={classNames(styles["profile-form__avatar"], generalStyles.center)}>
              <img src={user.photoUrl} />
            </div>
            <div className={styles["profile-form__nickname"]}>
              <p>{user.name}</p>
            </div>
            <Button value="Logout" />
          </form>
        )}
      </UserContext.Consumer>
    );
  }
}
