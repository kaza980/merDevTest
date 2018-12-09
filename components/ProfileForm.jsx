import {Button} from "./Button.js";
import {UserContext} from '../appComponents.js';

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
            <form
                onSubmit={updateUser(null)}
            >
                <div className="main-block__avatar center">
                    <img src={user.photoUrl} />
                </div>
                <div className="main-block__nickname">
                    <p>{user.name}</p>
                </div>
                <Button value="Logout" />
            </form>
            )
    }
}