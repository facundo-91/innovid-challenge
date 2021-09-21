import React, {useEffect, useState} from "react";

import winIcon from "../assets/windows-4.png";
import appIcon from "../assets/executable-1.png";
import desktopIcon from "../assets/desktop-4.png";
import internetIcon from "../assets/msie1-4.png";
import outlookIcon from "../assets/outlook_express-2.png";
import volumeIcon from "../assets/loudspeaker_rays-1.png";

import styles from "./TaskBar.module.scss";

const TaskBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState("00:00 AM");

  useEffect(() => {
    const showTime = () => {
      const currentTime = new Date().toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      });

      setCurrentTime(currentTime);
    };

    showTime();
    const timeInterval = setInterval(showTime, 60000);

    return () => clearInterval(timeInterval);
  }, [currentTime]);

  return (
    <div className={styles.taskBarContainer}>
      <button className={styles.startButton}>
        <img className={styles.winIcon} src={winIcon} />
        <span className={styles.startButtonText}>Start</span>
      </button>
      <span className={styles.separator} />
      <div className={styles.quickLaunch}>
        <span className={styles.quickLaunchSeparator} />
        <div className={styles.quickLaunchIcons}>
          <img className={styles.desktopIcon} src={desktopIcon} />
          <img className={styles.internetIcon} src={internetIcon} />
          <img className={styles.outlookIcon} src={outlookIcon} />
        </div>
        <span className={styles.separator} />
        <span className={styles.quickLaunchSeparator} />
      </div>
      <div className={styles.openApps}>
        <img src={appIcon} />
        <span className={styles.appName}>Innovid Server App</span>
      </div>
      <span className={styles.separator} />
      <div className={styles.status}>
        <img className={styles.volumeIcon} src={volumeIcon} />
        <span className={styles.hour}>{currentTime}</span>
      </div>
    </div>
  );
};

export default TaskBar;
