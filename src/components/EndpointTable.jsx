import React, { useEffect, useState } from "react";

const EndpointTable = () => {
  const [endpoints, setEndpoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/endpoints")
      .then((res) => res.json())
      .then((data) => {
        setEndpoints(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading endpoints...</p>;

  return (
    <table border="1" style={{ width: "100%", textAlign: "left" }}>
      <thead>
        <tr>
          <th>Endpoint</th>
          <th>Status</th>
          <th>Latency</th>
        </tr>
      </thead>
      <tbody>
        {endpoints.map((ep, i) => (
          <tr key={i}>
            <td>{ep.name}</td>
            <td>{ep.status}</td>
            <td>{ep.latency ? ep.latency + "ms" : "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EndpointTable;
