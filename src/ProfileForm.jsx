import { Button } from "./Button.jsx";
import { UserContext } from "./appComponents.jsx";

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
            <div className="profile-form__avatar center">
              <img src={user.photoUrl} />
            </div>
            <div className="profile-form__nickname">
              <p>{user.name}</p>
            </div>
            <Button value="Logout" />
          </form>
        )}
      </UserContext.Consumer>
    );
  }
}
