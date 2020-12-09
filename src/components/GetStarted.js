import React from "react";
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

const GetStartedStyles = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 40px;

    .inner {
        margin-top: 65px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 1000px;
        width: 100%;
        min-height: 600px;
        background: rgb(242,180,155);
        background: linear-gradient(0deg, rgba(242,180,155,1) 0%, rgba(241,95,96,1) 50%, rgba(169,55,89,1) 100%); 
        padding: 60px 40px 20px 40px;
        clip-path: polygon(50% 10%, 55% 0, 100% 0, 100% 100%, 55% 100%, 50% 100%, 45% 100%, 0 100%, 0 0, 45% 0);
    }

    .inner-block {
        width: 100%;
        padding: 20px;
    }

    h1 {
        margin-bottom: 10px;
        text-align: center;
    }

    .icon {
        font-size: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
        margin: 20px;
    }

    input {
        padding: 5px;
        border-radius: 0.3rem;
        border: none;
        margin: 5px 0;
    }

    button {
        background-color: black;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 0.3rem;
    }

    button:hover {
        background-color: grey;
        color: black;
    }

    .inner-social {
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .social-icons > *:hover {
        color: black;
    }

    @media screen and (max-width: 700px) {
        .inner {
            padding: 100px 20px 20px 20px;
            clip-path: polygon(0 0, 35% 0, 50% 10%, 65% 0, 100% 0, 100% 100%, 65% 100%, 50% 100%, 35% 100%, 0 100%);
        }
    }

    @media screen and (max-width: 475px) {
        padding: 20px;

        .inner {
            padding: 100px 0 20px 0;
        }

        h1 {
            font-size: 30px;
        }

        .inner-social {
            flex-direction: column;
        }
    }   
`;

export default function GetStarted() {

  return (
    <GetStartedStyles id="getStarted">
        <div className='inner'>
           
           <div className="inner-block">
                <h1>Start Securing Your Business Environment Today!</h1>
                <p><span className='icon' role="img" aria-label="number one">1️⃣</span> We conduct an initial conversation and a Q & A session to understand your requirements.</p>
                <p><span className='icon' role="img" aria-label="number two">2️⃣</span> Onboarding and prioritization of patches</p>
                <p><span className='icon' role="img" aria-label="number three">3️⃣</span> Continued maintenance and reporting</p>
           </div>
           
           <form>
           <h2>Fill in your details for your FREE consultation</h2>
               <input type="text" placeholder="Name" />
               <input type="text" placeholder="Company" />
               <input type="tel" placeholder="Telephone" />
               <input type="email" placeholder="Email" />
               <button type="button">Submit</button>
           </form>
           <div className="inner-social">
               <h2>Get Connected:</h2><span className="social-icons"><FacebookIcon fontSize="large"/><YouTubeIcon fontSize="large" /><LinkedInIcon fontSize="large" /></span>
           </div>
        </div>
    </GetStartedStyles>
  )
}