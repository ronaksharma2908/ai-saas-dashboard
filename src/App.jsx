import React from "react";
import Header from "./components/Header";
import KPICard from "./components/KPICard";
import DonutChart from "./components/DonutChart";
import SparkBar from "./components/SparkBar";
import EndpointTable from "./components/EndpointTable";
import AlertFeed from "./components/AlertFeed";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
        <KPICard title="Uptime" apiUrl="http://localhost:5000/api/kpis/uptime" />
        <KPICard title="Requests" apiUrl="http://localhost:5000/api/kpis/requests" />
        <KPICard title="Errors" apiUrl="http://localhost:5000/api/kpis/errors" />
      </div>
      <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
        <DonutChart apiUrl="http://localhost:5000/api/distribution" />
        <SparkBar apiUrl="http://localhost:5000/api/trends" />
      </div>
      <div style={{ margin: "20px" }}>
        <EndpointTable />
      </div>
      <div style={{ margin: "20px" }}>
        <AlertFeed apiUrl="http://localhost:5000/api/alerts" />
      </div>
    </div>
  );
};

export default App;
