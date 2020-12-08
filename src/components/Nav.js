import React, { useState } from "react";
import styled from 'styled-components';
import StartButton from "./StartButton";
import hamburgerIcon from "../images/menu.svg";
import closeIcon from "../images/x.svg";
import { Link } from "gatsby";

const NavStyles = styled.nav`

   width: 100%;
   border-bottom: 3px solid white;
   min-height: 65px;
   display: flex;
   align-items: center;
   background: rgb(242,180,155);
   background: linear-gradient(0deg, rgba(242,180,155,1) 0%, rgba(241,95,96,1) 50%, rgba(169,55,89,1) 100%); 
   position: fixed;
   top: 0;
   margin-bottom: -65px;
   z-index: 1;

    ul {
      width: 100%;
      display: flex;
      list-style: none;
      justify-content: space-around;
    }

    a {
      text-decoration: none;
      color: white;
      font-size: 20px;
    }

    a:hover {
      color: black;
    }

    .showOnMobile {
      display: none;
    }

    .getStarted {
      background-color: black;
      padding: 2px;
      border-radius: 0.2rem;
    }

    .getStarted:hover {
      background-color: grey;
      color: black;
    }

    .hamburgerButton {
      background: none;
      border: none;
    }

    .closeButton {
      background: none;
      border: none;
      position: absolute;
      right: 15px;
      top: 15px;
    }

    @media screen and (max-width: 600px) {
      
      ul {
        flex-direction: column;
        padding: 10px 0;
      }

      li {
        padding: 5px 20px;
      }

      .hideOnMobile {
        display: none;
      }

      .showOnMobile {
        display: inline-block;
      }
    }
`;

export default function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <NavStyles>
      <ul onClick={toggleMenu}>
          <li className="showOnMobile"><button onClick={toggleMenu} className="hamburgerButton" ><img src={hamburgerIcon} alt="hamburger menu icon"/></button></li>
          <li className="hideOnMobile"><Link to="/#home" >Home</Link></li>
          <li className="hideOnMobile"><Link to="/#challenges">Challenges</Link></li>
          <li className="hideOnMobile"><Link to="/#features">Features</Link></li>
          <li className="hideOnMobile"><Link to="/#benefits">Benefits</Link></li>
          <li className="hideOnMobile"><StartButton /></li>
          {menuOpen? <><li className="showOnMobile"><Link to="/#home">Home</Link></li>
          <li className="showOnMobile"><Link to="/#challenges">Challenges</Link></li>
          <li className="showOnMobile"><Link to="/#features">Features</Link></li>
          <li className="showOnMobile"><Link to="/#benefits">Benefits</Link></li>
          <li className="showOnMobile"><Link className="getStarted" to="/#getStarted">Get Started</Link></li>
          <button className="closeButton showOnMobile" onClick={toggleMenu}><img src={closeIcon} alt="close icon" /></button></> : null}
      </ul>
    </NavStyles>
  )
}