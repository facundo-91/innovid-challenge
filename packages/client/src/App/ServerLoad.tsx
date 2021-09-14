import React, {useEffect, useState} from "react";

import serverOnImage from "../assets/pc-on.gif";
import serverOffImage from "../assets/pc-off.png";

import styles from "./ServerLoad.module.scss";

interface Props {
  serverNumber: string;
}

const ServerLoad: React.FC<Props> = ({serverNumber}) => {
  const [serverStatus, setServerStatus] = useState(() => {
    const localStatus = localStorage.getItem(`server-${serverNumber}-status`) === "true";

    return localStatus || false;
  });
  const [cpuUsage, setCpuUsage] = useState("0");

  // Save server status to localstorage
  useEffect(() => {
    localStorage.setItem(`server-${serverNumber}-status`, JSON.stringify(serverStatus));
  }, [serverStatus, serverNumber]);

  // Fetch server data every 5s
  useEffect(() => {
    const fetchServerStatus = () => {
      fetch(`http://localhost:8000/status/${serverNumber}`)
        .then((res) => res.json())
        .then((result) => {
          setCpuUsage(result.load);
        });
    };

    if (serverStatus) {
      fetchServerStatus();
      const intervalId = setInterval(fetchServerStatus, 5000);

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
        <p className="status-bar-field">CPU Usage: {serverStatus ? cpuUsage : "0"}%</p>
      </div>
    </div>
  );
};

export default ServerLoad;
