import React, { useEffect,useState } from "react";
import styled from "styled-components";
import GoogleChart from "../../Components/BarChart/Barchart";
import PaymentsIcon from "@mui/icons-material/Payments";

function Home() {
  const Container = styled.div`
    width: 100%;
    height: 80vh;
    border-radius: 5%;
  `;
  const Wrapper = styled.div`
    width: 100%;
    height: 80vh;
    border-radius: 5%;
  `;
  const MainBox = styled.div`
    width: 100%;
    height: inherit;
    display: grid;
    grid-template-rows: 50% 50%;
    border-radius: 20px;
    text-align: center;
    border-radius: 5%;
  `;
  const FirstContainer = styled.div`
    /* background-image: url("https://thumbs.dreamstime.com/b/poker-prints-us-dollar-american-money-isolated-white-cash-flying-hundred-dollars-background-194776268.jpg"); */
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    border-radius: 5%;
    background-size: cover;
  `;
  const SecondContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("https://i.pinimg.com/originals/36/ee/d1/36eed1919635a23265e50bc1944f642e.jpg");
    padding-bottom: 10%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 5%;
  `;
  const CardContainer = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  `;
  const Card = styled.div`
    width: 100%;
    padding: 20px;
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
  `;
  const CardContainer1 = styled.div`
    background-image: linear-gradient(to right, #dabed0, white 80%);
    flex: 1;

    justify-content: center;
    align-items: center;
    border-radius: 10%;
    box-shadow: 5px 5px 5px 5px gray;
    text-align: center;
  `;
  const CardContainer2 = styled.div`
    background-image: linear-gradient(to right, #dabed0, white 80%);
    text-align: center;
    flex: 1;
    background-color: var(--color-background);
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 10%;
    box-shadow: 5px 5px 5px 5px gray;
    text-align: center;
  `;
  const CardContainer3 = styled.div`
    background-image: linear-gradient(to right, #dabed0, white 80%);
    text-align: center;
    flex: 1;
    background-color: var(--color-background);
    justify-content: center;
    align-items: center;
    border-radius: 10%;
    box-shadow: 5px 5px 5px 5px gray;
  `;
  const Icon = styled.div``;
  const IconDesc = styled.div``;
  const LapContainer = styled.div`
    background-color: #fff;
    width: 50%;
    height: fit-content;
    border-radius: 20px;
    margin-top: 40px;
     border: 2px solid gray;
  `;
  const LapScreen = styled.div`
    margin: 5%;
    top: 10px; 
   
  `;
  const LapBase1 = styled.div`
    width: 55%;
    height: 20px;
    padding: 10px;
    border-radius: 8px;
   
    display: flex;
    background-color:  #360c28;
    justify-content: center;
    align-items: center;
    color: white;
  `;
  const LapBase2 = styled.div`
    width: 55%;
    height: 20px;
    padding: 30px;
    border-radius: 8px;
    display: flex;
    background-color:   #fff;
    justify-content: center;
    align-items: center;
  `;
    const [User,setUser]=useState('')
    useEffect(() => {
    setUser(localStorage.getItem('user'))
    }, [])
  return (
    <Container>
      <Wrapper>
        <MainBox>
          <FirstContainer>
            <h2
              style={{
                margin: "0px",
                fontSize: "40px",
                padding: "5px",
                backgroundColor:"white",
                textAlign:"center",
                width:"fit-content",
                marginLeft:"45%"
              }}
            >
              Welcome {User}....
            </h2>
            <CardContainer>
              <Card>
                <CardContainer1>
                  <Icon>
                    <PaymentsIcon
                      style={{ fontSize: "4rem", color: "var( --color-green)" }}
                    />
                    <br />$ 30000
                  </Icon>
                  <IconDesc>Salary</IconDesc>
                </CardContainer1>
                <CardContainer2>
                  <Icon>
                    <PaymentsIcon
                      style={{ fontSize: "4rem", color: "var( --color-green)" }}
                    />
                  </Icon>
                  <IconDesc>
                    {" "}
                    $4000
                    <br />
                    Expence
                  </IconDesc>
                </CardContainer2>
                <CardContainer3>
                  <Icon>
                    <PaymentsIcon
                      style={{ fontSize: "4rem", color: "var( --color-green)" }}
                    />
                  </Icon>
                  <IconDesc>
                    $24000
                    <br />
                    Balance
                  </IconDesc>
                </CardContainer3>
              </Card>
            </CardContainer>
          </FirstContainer>
          <SecondContainer>
            <LapContainer>
              <LapScreen>
                <GoogleChart />
              </LapScreen>
            </LapContainer>
          
            <LapBase2>
              “Do not save what is left after spending, but spend what is left
              after saving”. – Warren Buffett
            </LapBase2>
          </SecondContainer>
        </MainBox>
      </Wrapper>
    </Container>
  );
}

export default Home;
