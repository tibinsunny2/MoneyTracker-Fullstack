import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function Add() {
  const Conatiner = styled.div`
    width: 100%;
    background-image: url("https://c4.wallpaperflare.com/wallpaper/786/881/302/macro-money-blur-bank-coins-hd-wallpaper-preview.jpg ");
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5%;
  `;
  const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: center;
  `;
  const FirstContainer = styled.div`
    width: 100%;
    padding: 30px;
    border-radius: 20px;
    background-color: lightcyan;
  `;
  const Mainbox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4%;
    margin: 2%;
  `;
  const Headder = styled.h2``;

  const BalanceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 5px 5px lightgray;
    padding: 5px;
    margin: 20px;
    background-color: white;
  `;
  const Balance = styled.div``;
  const ButtonCancel = styled.div`
    border: 2px solid black;
    color: white;
    background-color: black;
    padding: 10px;
    border-radius: 10px;
    &:hover {
      background-color: red;
    }
  `;

  const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 5px 5px 5px lightgray;
    padding: 10px;
    margin: 8px;
  `;
  const DateContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 5px 5px lightgray;
    padding: 5px;
    background-color: white;
  `;
  const Input = styled.input`
    margin: 5px;
    box-shadow: 5px 5px 5px lightgray;
    padding: 5px;
    width: 100%;
  `;
  const ButtonContainer = styled.div``;
  const ButtonRadio = styled.div``;
  const ButtonTransactionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin: 8px;
  `;
  const Buttont = styled.div`
    width: 50%;
    background-color: black;
    color: white;
    padding: 10px;
    border-radius: 10%;
  `;
  const SecondContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 5px 5px lightgray;
    padding: 5px;
  `;
  const ExpenceContainer = styled.div`
    margin: 8px;
    padding: 30px;
    background-color: var(--color-red);
    border-radius: 10%;
  `;
  const IncomContainer = styled.div`
    margin: 8px;
    background-color: var(--color-green);
    padding: 30px;
    border-radius: 10%;
  `;
  const Options = styled.option`
    width: 100%;
    padding: 2px;
    margin: 2px;
    &:hover {
      background-color: #c49292;
    }
  `;
  const Selection = styled.select`
    margin: 5px;
    box-shadow: 5px 5px 5px gray;
    padding: 5px;
    width: 100%;
    &:hover {
      background-color: #c49292;
    }
  `;
  const [category, setCategories] = useState(null);
  const [expense_name, setExpense_name] = useState("");
  const [amount_spent, setAmount] = useState("");
  const Navigate=useNavigate()

  const handleDropdownChange = (e) => {
    e.preventDefault();
    setCategories(e.target.value);
  };
  const { id } = useParams();
  const Id = Number(id);
  const URL = ``;
  useEffect(() => {
    fetch(URL, {
      method: "get",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  const Remove = () => {
    fetch(URL, {
      method: "delete",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
        alert("item deleted successfully");
        Navigate("/history");
     
  };

  const PostData = () => {
    console.log(category);
    console.log(expense_name);
    console.log(amount_spent);
    const Token = localStorage.getItem("accessToken");
    console.log(Token);
    fetch(URL, {
      method: "put",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        category,
        amount_spent,
        expense_name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("your changes added successfuly");
        Navigate("/history");
      });
  };
  return (
    <Conatiner>
      <Wrapper>
        <Mainbox>
          <FirstContainer>
            <Headder>Edit your valuable changes </Headder>
            <BalanceContainer>
              <Balance>Balance : $5000</Balance>
              <ButtonCancel onClick={Remove}>Delete</ButtonCancel>
            </BalanceContainer>
            <FormContainer>
              <DateContainer>
                <p style={{ color: "gray" }}>date of payment</p>
                <Input
                  style={{ width: "30%" }}
                  placeholder="Date of payment"
                  type="Date"
                />
              </DateContainer>
              <Selection
                id="dropdown"
                value={category}
                onChange={handleDropdownChange}
                name="dropdown"
              >
                <Options value="">-- select categories --</Options>
                <Options value="Food">Food</Options>
                <Options value="Transportation">Travel</Options>
                <Options value="Entertainment">Entertainment</Options>
                <Options value="Other">other</Options>
              </Selection>
              <Input
                id="q2"
                type="number"
                value={amount_spent}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                placeholder="enter your amount"
              />
              <Input
                id="q1"
                type="text"
                autoFocus
                value={expense_name}
                onChange={(e) => {
                  setExpense_name(e.target.value);
                }}
              />
            </FormContainer>
            <ButtonContainer>
              <ButtonRadio></ButtonRadio>
              <ButtonRadio></ButtonRadio>
            </ButtonContainer>
            <ButtonTransactionContainer>
              <Buttont onClick={PostData}>Save Changes</Buttont>
            </ButtonTransactionContainer>
          </FirstContainer>
        </Mainbox>
      </Wrapper>
    </Conatiner>
  );
}

export default Add;
