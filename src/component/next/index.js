import styles from "./index.module.css";
import heart from "../../assets/images/heart.svg";

export function Next(props) {
  const { onNextClick } = props;

  return (
    <button className={styles.button} type="button" onClick={onNextClick}>
      <img className={styles.image} src={heart} />
    </button>
  );
}
