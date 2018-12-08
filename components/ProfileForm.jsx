import {Button} from "./Button";

export class ProfileForm extends React.Component {
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
                onSubmit={this.sendProfileForm}
            >
                <div className="main-block__avatar center">
                    <img src={this.props.user.photoUrl} />
                </div>
                <div className="main-block__nickname">
                    <p>{this.props.user.name}</p>
                </div>
                <Button value="Logout" />
            </form>
        );
    }
}