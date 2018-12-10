export function Button(props) {
  return (
    <div className="center button">
      <button className="button__button-field">{props.value}</button>
    </div>
  );
}
