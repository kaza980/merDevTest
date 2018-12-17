import generalStyles from "../../assets/style/style.css";
import styles from "./Button.css";
import classNames from 'classnames';

export function Button(props) {
  return (
    <div className={classNames(generalStyles.center, styles.button)}>
      <button className={styles["button__button-field"]}>{props.value}</button>
    </div>
  );
}
