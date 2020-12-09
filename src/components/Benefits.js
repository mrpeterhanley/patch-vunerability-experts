import React from "react";
import styled from 'styled-components';
import StartButton from "./StartButton";

const BenefitStyles = styled.div`
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
    }

    .button-block {
        grid-column: span 2;
        padding: 20px;
    }

    h2, p {
        line-height: 1.6rem;
    }

    h2 {
        margin-bottom: 10px;
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
            clip-path: polygon(0 0, 35% 0, 50% 5%, 65% 0, 100% 0, 100% 95%, 65% 95%, 50% 100%, 35% 95%, 0 95%);
            padding: 60px 0 100px 0;
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
    }   
`;

export default function Benefits() {

  return (
    <BenefitStyles id="benefits">
        <div className='inner'>
            <h1 className='heading-block'>Benefits</h1>
            <div className='inner-block'>
                <h2>1. Increase Business Security</h2>
                <p><span role="img" aria-label="green tick">✅</span> Identify your security needs with our assessment process.</p>
                <p><span role="img" aria-label="green tick">✅</span> Implement mitigation strategies with our patch and vunerability solutions.</p>
            </div>
            <div className='inner-block'>
                <h2>2. Be Compliant</h2>
                <p><span role="img" aria-label="green tick">✅</span> Stay compliant with our patch documentation.</p>
                <p><span role="img" aria-label="green tick">✅</span> Access detailed reporting.</p>
                <p><span role="img" aria-label="green tick">✅</span> Understand the strategies in place.</p>
            </div>
            <div className='inner-block'>
                <h2>3. Patch On Time</h2>
                <p><span role="img" aria-label="green tick">✅</span> Deploy latest patches automatically with our patch solution.</p>
                <p><span role="img" aria-label="green tick">✅</span> Reduce threats with our frequent vunerability scanning.</p>
                <p><span role="img" aria-label="green tick">✅</span> Stay ahead to secure your business environment.</p>
            </div>
            <div className='inner-block'>
                <h2>4. Our Expertise</h2>
                <p><span role="img" aria-label="green tick">✅</span> Ultimate protection to your endpoints, servers, and network devices.</p>
                <p><span role="img" aria-label="green tick">✅</span> Prevent attacks and mitigate threat factors.</p>
                <p><span role="img" aria-label="green tick">✅</span> Flexibility and convenience at your fingertips.</p>
            </div>
            <div className='button-block'>
                <StartButton />
            </div>
        </div>
    </BenefitStyles>
  )
}