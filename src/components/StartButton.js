import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";

const StartButtonStyles = styled.div`

    a {
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
    }
    
`;

export default function StartButton() {

  return (
    <StartButtonStyles><Link to="/#getStarted">Get Started</Link></StartButtonStyles>
  )
}