import React, { useEffect, useState } from "react";

const AlertFeed = ({ apiUrl }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setAlerts(data))
      .catch(() => setAlerts([]));
  }, [apiUrl]);

  return (
    <div>
      <h3>Alerts</h3>
      <ul>
        {alerts.map((alert, i) => (
          <li key={i} style={{ color: alert.type === "error" ? "red" : "orange" }}>
            {alert.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertFeed;
