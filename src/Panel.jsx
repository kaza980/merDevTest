import styles from "../style.css";

export default class Panel extends React.Component {
  render() {
    return <div className={styles.panel} {...this.props} />;
  }
}
