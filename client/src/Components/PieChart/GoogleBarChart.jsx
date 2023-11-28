import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import styled from "styled-components";

const StyledChart = styled(Chart)`
  width: 100%;
  max-width: 900px;
  height: 34vh;
  margin: 0 auto;
  background-color: #eeb3dc;
  box-shadow: 5px 10px 5px gray;
`;

const Container = styled.div`
  width: 100%;
  height: 30vh;
`;

const GooglePieChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Token = localStorage.getItem("accessToken");
        console.log(Token);

        const response = await fetch("total-amount-by-category/", {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        localStorage.setItem("data", JSON.stringify(jsonData));
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  const chartData = [
    ["Task", "days per month"],
    ["Food", data.total_expenses_in_percentage?.Food || 0],
    ["Travel", data.total_expenses_in_percentage?.Transportation || 0],
    ["Entertainment", data.total_expenses_in_percentage?.Entertainment || 0],
    ["Other", data.total_expenses_in_percentage?.Other || 0],
  ];

  return (
    <Container>
      <StyledChart
        chartType="BarChart"
        data={chartData}
        options={{
          title: "My Daily Activities and expense",
          is3D: true, // Enable 3D view
          backgroundColor: "#eeb3dc",
        }}
      />
    </Container>
  );
};

export default GooglePieChart;
