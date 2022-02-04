import male from '../../assets/images/male.svg'
import female from '../../assets/images/female.svg'

import styles from './index.module.css'

export function Gender(props) {
    const { gender } = props;
    const unknownGender = "unknown";

    if (gender === "male") {
        return <img className={styles.gender} src={male} />;
    } else if (gender === "female") {
        return <img className={styles.gender} src={female} />;
    }
    return unknownGender;
}