export function Button(props) {
    return (
        <div className="center main-block__button">
            <input
                type="submit"
                value={props.value}
                className="main-block__button-field"
            />
        </div>
    );
}