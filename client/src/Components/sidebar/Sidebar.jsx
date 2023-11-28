import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddCardIcon from "@mui/icons-material/AddCard";
import HistoryIcon from "@mui/icons-material/History";
import SummarizeIcon from "@mui/icons-material/Summarize";
import LogoutIcon from "@mui/icons-material/Logout";
import Dp from "../Images/Navbar/dp.jpg";
import Lock from "../Images/Navbar/lock.png";
import "./Sidebar.css";
function Sidebar() {
  const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #F875AA;
    
  `;
  const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F875AA;
    
  `;
  const Parent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #F875AA;
    
  `;
  const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5%;
    background-color:#eeb3dc
;
    border: none;
    box-shadow: 5px 5px 5px black;
    margin-top: 20px;
  `;
  const UserDp = styled.img`
    width: 100px;
    border-radius: 50%;
    height: fit-content;
    margin: 0%;
    padding: 5px;
  `;
  const DpContainer = styled.div`
    width: fit-content;
    background-color: #20aa33;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `;
  const UserName = styled.div`
    background-color: transparent;
    color: #a23dd1;
    font-size: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  `;
  const FirstContainer = styled.ul`
    padding: 60px;
    /* background-color: lightcoral; */
    border-radius: 5%;
  `;
  const SecondContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  `;
  const ItemContainer = styled.li`
    display: flex;

    margin: 5px;
    & :hover {
      color: #7662e7 !important;
      border-radius: 20%;
    }
  `;
  const ItemIcon = styled.div`
    margin-right: 1px;
    padding: 2px;
    color: black;
  `;
  const location = useLocation();
  const AccessToken = localStorage.getItem("accessToken");
  const LocClear = () => {
    localStorage.clear();
    window.location.reload();
  };
  const [User,setUser]=useState('')
  useEffect(() => {
  setUser(localStorage.getItem('user'))
  }, [])
  const navigate=useNavigate()
  const handleSwitch=()=>{
    navigate('/Dp')
  } 
  const [keyDash,setKeyDash]=useState([])
  const handleKey=()=>{
     
     setKeyDash(true)
     localStorage.setItem('Keydash',keyDash)
  }
  const Remove=()=>{
    localStorage.removeItem('Keydash')
    window.location.reload()
  }
  const {expense_id}=useParams()
  return (
    <Container>
      <Wrapper>
        {!AccessToken ? (
          <UserDp src={Lock} />
        ) : (
          <Parent>
            <UserContainer>
              <DpContainer onClick={handleSwitch}>
                <UserDp src={Dp} />
              </DpContainer>
              <UserName>{User}</UserName>
            </UserContainer>
            <FirstContainer>
              <ItemContainer>
                <ItemIcon>
                  <HomeIcon />
                </ItemIcon>
                <Link
                  style={{
                    textDecoration: "none",
                    padding: "2px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "black",
                  }}
                  to="/home"
                  
                  className={location.pathname === "/home" ? "active" : ""}
                >
                  Home
                </Link>
              </ItemContainer>
              <ItemContainer>
                <ItemIcon>
                  <DashboardIcon />
                </ItemIcon>
                <Link
                  style={{
                    textDecoration: "none",
                    padding: "2px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "black",
                  }}
                  to="/dashbord"
                  
                  className={location.pathname === "/dashbord" ? "active" : ""}
                >
                  Dashboard
                </Link>
              </ItemContainer>
              <ItemContainer>
                <ItemIcon>
                  <AddCardIcon />
                </ItemIcon>
                <Link
                  style={{
                    textDecoration: "none",
                    padding: "2px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "black",
                  }}
                  to="/add"
                  
                  className={location.pathname === "/add" ? "active" : ""}
                >
                  Add Expence
                </Link>
              </ItemContainer>
              <ItemContainer>
                <ItemIcon>
                  <HistoryIcon />
                </ItemIcon>
                <Link
                  style={{
                    textDecoration: "none",
                    padding: "2px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "black",
                  }}
                  to="/history"
                  className={location.pathname === "/history" ? "active" : ""}
              
                >
                  History
                </Link>
              </ItemContainer>
            
              <ItemContainer>
                <ItemIcon>
                  <SummarizeIcon />
                </ItemIcon>
                <Link
                  style={{
                    textDecoration: "none",
                    padding: "2px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "black",
                  }}
                  onClick={handleKey}
                  to="/report"
                  className={location.pathname === "/report" ? "active" : ""}
                >
                  Report-doubleClick for print
                </Link>
              </ItemContainer>
            </FirstContainer>
            <SecondContainer>
              <ItemContainer>
                <ItemIcon>
                  <LogoutIcon />
                </ItemIcon>
                <Link
                  style={{
                    textDecoration: "none",
                    padding: "2px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "black",
                  }}
                  onClick={LocClear}
                >
                  Logout
                </Link>
              </ItemContainer>
            </SecondContainer>
          </Parent>
        )}
      </Wrapper>
    </Container>
  );
}

export default Sidebar;
