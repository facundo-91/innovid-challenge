import * as React from "react";

import serverOnImage from "../assets/pc-on.gif";
import serverOffImage from "../assets/pc-off.png";

import styles from "./ServerLoad.module.scss";

const ServerLoad: React.FC = ({serverNumber}) => {
  const [serverStatus, setServerStatus] = React.useState(true);
  const [cpuUsage, setCpuUsage] = React.useState("100");

  // Fetch server status on mount
  React.useEffect(() => {
    fetch(`http://localhost:8000/status/${serverNumber}`)
      .then((res) => res.json())
      .then((result) => {
        setCpuUsage(`${result.load}`);
      });
  }, [serverNumber]);

  // Fetch server status every 5s
  React.useEffect(() => {
    if (serverStatus) {
      const intervalId = setInterval(() => {
        fetch(`http://localhost:8000/status/${serverNumber}`)
          .then((res) => res.json())
          .then((result) => {
            setCpuUsage(`${result.load}`);
          });
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [serverNumber, serverStatus]);

  return (
    <div className={`window ${styles.serverWindow}`}>
      <div className="title-bar">
        <div className="title-bar-text">Server #{serverNumber}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>
      <div className="window-body">
        <div className={styles.serverImageContainer} onClick={() => setServerStatus(!serverStatus)}>
          <img className={styles.serverImage} src={serverStatus ? serverOnImage : serverOffImage} />
        </div>
      </div>
      <div className="status-bar">
        <p className="status-bar-field">Status: {serverStatus ? "ON" : "OFF"}</p>
        <p className={`status-bar-field ${styles.serverStatus}`}>
          {serverStatus ? "shut down" : "turn on"}
        </p>
        <p className="status-bar-field">CPU Usage: {serverStatus ? `${cpuUsage}%` : "0%"}</p>
      </div>
    </div>
  );
};

export default ServerLoad;
