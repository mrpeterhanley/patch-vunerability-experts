import React, { useState } from "react";
import styled from 'styled-components';
import StartButton from "./StartButton";
import { Link } from "gatsby";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

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

    .hamburgerButton, .closeButton {
      background: none;
      border: none;
      color: white;
    }

    .hamburgerButton:hover,
    .closeButton:hover {
      color: black;
    }

    .closeButton {
      position: absolute;
      right: 17.5px;
      top: 17.5px;
    }

    @media screen and (max-width: 600px) {
      
      ul {
        flex-direction: column;
        padding: 10px 0;
      }

      li {
        padding: 10px 20px;
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
          <li className="showOnMobile"><button aria-label="Open mobile menu" onClick={toggleMenu} className="hamburgerButton" ><MenuIcon /></button></li>
          <li className="hideOnMobile"><Link to="/" >Home</Link></li>
          <li className="hideOnMobile"><Link to="/#challenges">Challenges</Link></li>
          <li className="hideOnMobile"><Link to="/#features">Features</Link></li>
          <li className="hideOnMobile"><Link to="/#benefits">Benefits</Link></li>
          <li className="hideOnMobile"><StartButton /></li>
          {menuOpen? <><li className="showOnMobile"><Link to="/">Home</Link></li>
          <li className="showOnMobile"><Link to="/#challenges">Challenges</Link></li>
          <li className="showOnMobile"><Link to="/#features">Features</Link></li>
          <li className="showOnMobile"><Link to="/#benefits">Benefits</Link></li>
          <li className="showOnMobile"><Link className="getStarted" to="/#getStarted">Get Started</Link></li>
          <button aria-label="Close mobile menu" className="closeButton showOnMobile" onClick={toggleMenu}><CloseIcon /></button></> : null}
      </ul>
    </NavStyles>
  )
}