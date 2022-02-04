import { Gender } from "./component/gender";
import { Info } from "./component/infos";
import { Avatar } from './component/avatar'
import json from "./fixtures/users.json";
import styles from "./App.module.css"
import { Previous } from "./component/previous"
import { Next } from "./component/next"
import { useState } from 'react'
// import { container } from "webpack";

function App() {
  const firstJsonItem = 0
  const [userId, setUserId] = useState(firstJsonItem)
  const jsonLength = json.length -1

  const { age, firstName, gender, lastName, description, city, avatar } = json[userId];

  const onNextClick = () => {
    if (userId < jsonLength) {
    setUserId(userId+1)
    } else {
    setUserId(firstJsonItem)
    }
    }
  const onPreviousClick = () => {
    if (userId > firstJsonItem) {
    setUserId(userId-1)
    } else {
    setUserId(jsonLength)
    }
    }
  return (
<>
    <div className={styles.container}>
      <Avatar avatar={avatar} />
      <Gender gender={gender} />
      <Info info={firstName} />
      <Info info={lastName} />
      <Info info={age} />
      <Info info={description} />
      <Info info={city} />
    </div>
    <div className={styles.actions}>
      <Previous onPreviousClick={onPreviousClick} />
      <Next onNextClick={onNextClick} />
    </div>
</>
  );
}

export default App;
