import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

const DonutChart = ({ apiUrl }) => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((resData) => {
        setData({
          labels: resData.labels,
          datasets: [
            {
              data: resData.values,
              backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
            },
          ],
        });
      });
  }, [apiUrl]);

  return <Pie data={data} />;
};

export default DonutChart;
