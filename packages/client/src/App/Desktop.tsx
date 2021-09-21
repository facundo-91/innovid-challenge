import React from "react";

import myComputerIcon from "../assets/computer_explorer-3.png";
import myDocumentsIcon from "../assets/directory_open_file_mydocs-1.png";
import iexplorerIcon from "../assets/msie1-1.png";
import networkIcon from "../assets/network_normal_two_pcs-2.png";
import recycleIcon from "../assets/recycle_bin_full-3.png";
import serverAppIcon from "../assets/executable-1.png";

import ServerLoad from "./ServerLoad";
import styles from "./Desktop.module.scss";

const Desktop: React.FC = () => {
  const servers = [1, 2, 3, 4];

  return (
    <div className={styles.desktop}>
      <div className={styles.desktopIcons}>
        <div className={styles.appContainer}>
          <img className={styles.appIcon} src={myComputerIcon} />
          <span className={styles.appName}>My Computer</span>
        </div>
        <div className={styles.appContainer}>
          <img className={styles.appIcon} src={myDocumentsIcon} />
          <span className={styles.appName}>My Documents</span>
        </div>
        <div className={styles.appContainer}>
          <img className={styles.appIcon} src={iexplorerIcon} />
          <span className={styles.appName}>Internet Explorer</span>
        </div>
        <div className={styles.appContainer}>
          <img className={styles.appIcon} src={networkIcon} />
          <span className={styles.appName}>Network Neighborhood</span>
        </div>
        <div className={styles.appContainer}>
          <img className={styles.appIcon} src={recycleIcon} />
          <span className={styles.appName}>Recycle Bin</span>
        </div>
      </div>
      <div className={styles.container}>
        <div className={`window ${styles.windowPadding}`}>
          <div className={`${styles.padding} title-bar`}>
            <img className={styles.serverAppIcon} src={serverAppIcon} />
            <div className="title-bar-text">
              <span className={styles.serverAppTitle}>Innovid Server App</span>
            </div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" />
            </div>
          </div>
          <div className={`${styles.appBody} window-body`}>
            {servers.map((sv) => (
              <ServerLoad key={sv} serverNumber={`${sv}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
