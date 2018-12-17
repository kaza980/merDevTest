import generalStyles from "../../assets/style/style.css";
import styles from "./Input.css"
import classNames from 'classnames';

export function Input(props) {
  return (
    <div className={classNames(generalStyles.center, styles["input"])}>
      <input className={styles["input__input-field"]} required {...props} />
    </div>
  );
}
