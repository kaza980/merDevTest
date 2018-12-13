import styles from "../style.css";
import classNames from 'classnames';

export function Button(props) {
  return (
    <div className={classNames(styles.center, styles.button)}>
      <button className={styles["button__button-field"]}>{props.value}</button>
    </div>
  );
}
