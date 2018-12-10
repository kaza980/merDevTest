export function Input(props) {
    return (
        <div className="center main-block__input">
            <input
                className="main-block__input-field "
                required
                {...props}
            />
        </div>
    );
}