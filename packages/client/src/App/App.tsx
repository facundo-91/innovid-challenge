import * as React from "react";

import ServerLoad from "./ServerLoad";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <main className={styles.container}>
      <ServerLoad serverNumber="1" />
      <ServerLoad serverNumber="2" />
      <ServerLoad serverNumber="3" />
      <ServerLoad serverNumber="4" />
    </main>
  );
};

export default App;
