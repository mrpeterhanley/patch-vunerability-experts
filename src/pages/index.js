import React from "react"
import styled from 'styled-components';
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import bgImage from '../images/background.jpg'
import Nav from "../components/Nav";
import Home from "../components/Home";
import Challenges from "../components/Challenges";
import Benefits from "../components/Benefits";
import Features from "../components/Features";
import GetStarted from "../components/GetStarted";



const IndexStyles = styled.div`
    color: white;
    background-image: url(${bgImage});
    min-height: 100vh;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
`;

const IndexPage = () => {
  return (
    <IndexStyles>
      <GlobalStyles />
      <Typography />
      <Nav />
      <Home />
      <Challenges />
      <Features />
      <Benefits />
      <GetStarted />
    </IndexStyles>
  )
}

export default IndexPage;
