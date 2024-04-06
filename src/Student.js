
import styles from "./App.module.css";
const Student = (props) => {
    return (
      <h1 className={styles.name}>
        Name: {props.name}
      </h1>
    );
  };

  export default Student;