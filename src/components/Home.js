import React from "react";
import styled from 'styled-components';
import bugIcon from '../images/bug-icon.svg';

const HomeStyles = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 40px;

    .inner {
        margin-top: 65px;
        max-width: 1000px;
        width: 100%;
        min-height: 400px;
        background: rgb(242,180,155);
        background: linear-gradient(0deg, rgba(242,180,155,1) 0%, rgba(241,95,96,1) 50%, rgba(169,55,89,1) 100%); 
        padding: 0 80px 60px 80px;
        clip-path: polygon(100% 0, 100% 88%, 55% 88%, 50% 100%, 45% 88%, 0 88%, 0 0);
        display: grid;
        grid-template-columns: 200px 1fr;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }

    .inner > * {
        margin: 10px 0;
    }

    .mainIcon {
        width: 200px;
    }

    h1 {
        text-align: center;
        font-size: 40px;
        line-height: 3.5rem;
    }

    @media screen and (max-width: 700px) {

        .inner {
            display: flex;
            flex-direction: column;
            clip-path: polygon(100% 0, 100% 88%, 65% 88%, 50% 100%, 35% 88%, 0 88%, 0 0);
        } 

        .mainIcon {
            width: 100px;
        }

        h1 {
            font-size: 30px;
            line-height: 2.5rem;
        }
    }

    @media screen and (max-width: 475px) {

        padding: 20px;

        .inner {
            padding: 0 10px 60px 10px;
        } 

        h1 {
            font-size: 24px;
        }
    }
`;

export default function Home() {

  return (
    <HomeStyles>
        <div className='inner'>
            <img className='mainIcon' src={bugIcon} alt='icon' />
            <h1>Industry Experts in Patch & Vunerability Management</h1>
        </div>
    </HomeStyles>
  )
}