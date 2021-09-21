import * as React from "react";

import Desktop from "./Desktop";
import TaskBar from "./TaskBar";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <main className={styles.main}>
      <Desktop />
      <TaskBar />
    </main>
  );
};

export default App;
