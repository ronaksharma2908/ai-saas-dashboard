import React, { useEffect, useState } from "react";

const KPICard = ({ title, apiUrl }) => {
  const [value, setValue] = useState("Loading...");

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setValue(data.value))
      .catch(() => setValue("Error"));
  }, [apiUrl]);

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", flex: 1 }}>
      <h3>{title}</h3>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
};

export default KPICard;
