import styles from "./index.module.css";
import cross from "../../assets/images/cross.svg"

export function Previous(props) {
    const { onPreviousClick } = props;

    return (
    <button className={styles.button} type="button" onClick={onPreviousClick}>
              <img className={styles.cross} src={cross} />
    </button>
    );
}