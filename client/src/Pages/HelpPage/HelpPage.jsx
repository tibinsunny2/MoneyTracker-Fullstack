import React from "react";
import styled from "styled-components";
import GmailLogin from "../AuthenticationPages/GmailLogin";
import GmailSignUp from "../AuthenticationPages/GmailSignUp";
function HelpPage() {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGbPFVCXMDMq_NPJyTAQFGq66csOvdD1fMQ&usqp=CAU");
    background-repeat: no-repeat;
    background-size: cover;
    overflow-y: scroll;
  `;
  const Wrapper = styled.div`
    width: 100%;
  `;
  const Page = styled.div`
    width: 100%;
    display: flex;
  `;
  const TermsContainer = styled.div`
    color: black;
  `;
  const Term = styled.div`
    color: black;
    width: 70%;
    margin-left: 15%;
    font-weight: 800;
    font-size: medium;
  `;
  const Terms = styled.ul``;
  const Item = styled.li`

  
  `;
  const Para=styled.p`
  margin-left: 10%;
  `;
  const Headding = styled.h3`
  padding: 40px;
  `;
  return (
    <Container>
      <Wrapper>
        <Page>
          <TermsContainer>
            <Term>
              <Terms>
                <Item>
                  <Headding>1 . may i Help you ?....</Headding>
                 <Para>
                 We’re constantly developing new technologies and features to
                  improve our services. For example, we use artificial
                  intelligence and machine learning to provide you with
                  simultaneous translations, and to better detect and block spam
                  and malware. As part of this continual improvement, we
                  sometimes add or remove
                 </Para>
                </Item>
                <Item>
                  <Headding>2 . may i Help you ?....</Headding>
                 <Para>
                 We’re constantly developing new technologies and features to
                  improve our services. For example, we use artificial
                  intelligence and machine learning to provide you with
                  simultaneous translations, and to better detect and block spam
                  and malware. As part of this continual improvement, we
                  sometimes add or remove
                 </Para>
                </Item>
                <Item>
                  <Headding>3 . may i Help you ?....</Headding>
                 <Para>
                 We’re constantly developing new technologies and features to
                  improve our services. For example, we use artificial
                  intelligence and machine learning to provide you with
                  simultaneous translations, and to better detect and block spam
                  and malware. As part of this continual improvement, we
                  sometimes add or remove
                 </Para>
                </Item>
                <Item>
                  <Headding>4 . may i Help you ?....</Headding>
                 <Para>
                 We’re constantly developing new technologies and features to
                  improve our services. For example, we use artificial
                  intelligence and machine learning to provide you with
                  simultaneous translations, and to better detect and block spam
                  and malware. As part of this continual improvement, we
                  sometimes add or remove
                 </Para>
                </Item>
                <Item>
                  <Headding>5 . may i Help you ?....</Headding>
                 <Para>
                 We’re constantly developing new technologies and features to
                  improve our services. For example, we use artificial
                  intelligence and machine learning to provide you with
                  simultaneous translations, and to better detect and block spam
                  and malware. As part of this continual improvement, we
                  sometimes add or remove
                 </Para>
                </Item>
               
              </Terms>
            </Term>
          </TermsContainer>
        </Page>
      </Wrapper>
    </Container>
  );
}

export default HelpPage;
