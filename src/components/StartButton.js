import React from "react";
import styled from 'styled-components';

const StartButtonStyles = styled.a`
    padding: 10px 30px;
    background-color: black;
    border-radius: 2rem;
    text-decoration: none;
    color: white;
    font-size: 20px;

    &:hover {
        background-color: darkgrey;
        color: black;
    }
`;

export default function StartButton() {

  return (
      <StartButtonStyles href="#getStarted">Get Started</StartButtonStyles>
  )
}