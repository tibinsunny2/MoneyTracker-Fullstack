import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GooglePieChart from "../../Components/BarChart/Barchart";
import GoogleBarChart3D from "../../Components/PieChart/GoogleBarChart";
import Table from "../../Components/Tables/Table";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const Container = styled.div`
    width: 100%;
    height: inherit;
  `;
  const Wrapper = styled.div`
    width: 100%;
    height: inherit;
  `;
  const MainBoxContainer = styled.div`
    width: 100%;
    height: inherit;
    display: grid;
    grid-template-rows: 1fr 1fr;
  `;
  const FirstContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 30px;
  `;
  const SecondContainer = styled.div`
    overflow-y: scroll;
    height: 100%;
    background-color: #eeb3dc;
    padding: 10px;
  `;
  const FirstSubContainer1 = styled.div`
    background-color: #eeb3dc;
  `;
  const FirstSubContainer2 = styled.div`
    width: 100%;
    background-color: var(--color-green);
  `;
  const PieChartContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eeb3dc;
  `;
  const GoogleBarChartContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eeb3dc;
    margin-bottom: 5px;
  `;
  const location = useLocation();
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <Container onMouseDown={handleClick}>
      <Wrapper>
        <h2 style={{ backgroundColor: " #eeb3dc" }}>Expese Report</h2>
        <MainBoxContainer>
          <FirstContainer>
            <FirstSubContainer1>
              <GoogleBarChartContainer>
                <GoogleBarChart3D />
              </GoogleBarChartContainer>
            </FirstSubContainer1>
            <FirstSubContainer2>
              <PieChartContainer>
                <GooglePieChart />
              </PieChartContainer>
            </FirstSubContainer2>
          </FirstContainer>
          <SecondContainer>
            <Table />
          </SecondContainer>
        </MainBoxContainer>
      </Wrapper>
    </Container>
  );
}

export default Dashboard;
