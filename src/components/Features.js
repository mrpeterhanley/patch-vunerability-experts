import React from "react";
import styled from 'styled-components';
import StartButton from "./StartButton";

const FeaturesStyles = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 40px;

    .inner {
        margin-top: 65px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        max-width: 1000px;
        width: 100%;
        min-height: 600px;
        background: rgb(242,180,155);
        background: linear-gradient(0deg, rgba(242,180,155,1) 0%, rgba(241,95,96,1) 50%, rgba(169,55,89,1) 100%); 
        padding: 60px 40px 100px 40px;
        clip-path: polygon(50% 8%, 55% 0, 100% 0, 100% 92%, 55% 92%, 50% 100%, 45% 92%, 0 92%, 0 0, 45% 0);
    }

    .heading-block {
        grid-column: span 2;
        text-decoration: underline;
        padding: 20px;
    }

    .inner-block {
        width: 100%;
        padding: 20px;
        display: grid;
        grid-template-rows: 70px 1fr;
    }

    .inner-heading {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .icon {
        font-size: 30px;
        padding-right: 5px;
    }

    .button-block {
        grid-column: span 2;
        padding: 20px;
    }

    h2, p {
        line-height: 1.6rem;
    }

    ul {
        padding-left: 25px;
    }

    @media screen and (max-width: 1000px) {
        .inner {
            grid-template-columns: 1fr;
            padding: 80px 40px 120px 40px;
        }

        .heading-block {
            grid-column: span 1;
        }

        .button-block {
            grid-column: span 1;
        }
    }

    @media screen and (max-width: 700px) {
        .inner {
            padding: 60px 0 100px 0;
            clip-path: polygon(0 0, 35% 0, 50% 5%, 65% 0, 100% 0, 100% 95%, 65% 95%, 50% 100%, 35% 95%, 0 95%);
        }

        .inner-block {
            grid-template-rows: auto;
        }
    }

    @media screen and (max-width: 475px) {

        padding: 20px;

        h1 {
            font-size: 30px;
        }

        .inner-heading {
            flex-direction: column;
            gap: 10px;
            justify-content: center;
        }

        h2 {
            text-align: center;
        }
    }   
`;

export default function Features() {

  return (
    <FeaturesStyles>
        <div className='inner'>
            <h1 className='heading-block'>Features</h1>
            <div className='inner-block'>
                <div className='inner-heading'><span className='icon' role="img" aria-label="floppy disk">💾</span><h2>Range of Patching Solutions</h2></div>
                <ul>
                    <li>Cloud, on-prem, servers and endpoint devices.</li>
                    <li>Infrastructure patching including firewalls, routers, and switches.</li>
                    <li>Supports Windows/MAC/LINUX and 3rd party patching.</li>
                </ul>
            </div>
            <div className='inner-block'>
                <div className='inner-heading'><span className='icon' role="img" aria-label="gear wheel">⚙️</span><h2>Cater to Your Patching & Vulnerability Requirements</h2></div>
                <ul>
                    <li>Prioritize, schedule and automate patching.</li>
                    <li>Remote control and real-time capabilities.</li>
                    <li>Scan for vulnerabilities.</li>
                </ul>
            </div>
            <div className='inner-block'>
                <div className='inner-heading'><span className='icon' role="img" aria-label="smiley face">🙂</span><h2>Flexible Patch & Vulnerability Management Solutions</h2></div>
                <ul>
                    <li>Fully managed or partially managed services.</li>
                </ul>
            </div>
            <div className='inner-block'>
                <div className='inner-heading'><span className='icon' role="img" aria-label="eyes">👀</span><h2>Complete Visibility</h2></div>
                <ul>
                    <li>Access to customized reports.</li>
                    <li>Access to dashboards.</li>
                    <li>Compliance and reporting.</li>
                </ul>
            </div>
            <div className='button-block'>
                <StartButton />
            </div>
        </div>
    </FeaturesStyles>
  )
}