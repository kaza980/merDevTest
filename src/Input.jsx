import styles from "../style.css";
import classNames from 'classnames';

export function Input(props) {
  return (
    <div className={classNames(styles.center, styles["input"])}>
      <input className={styles["input__input-field"]} required {...props} />
    </div>
  );
}
