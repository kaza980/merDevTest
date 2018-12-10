export function Input(props) {
  return (
    <div className="center input">
      <input className="input__input-field " required {...props} />
    </div>
  );
}
