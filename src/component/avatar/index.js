import styles from "./index.module.css";

export function Avatar(props) {
  const { avatar } = props;
  return (
    <div className={styles.container}>
      <img className={styles.img} src={avatar} alt="" />
    </div>
  );
}
