import React from "react";
import styled from 'styled-components';
import StartButton from "./StartButton";

const ChallengesStyles = styled.div`
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
        padding: 20px 40px 60px 40px;
        clip-path: polygon(50% 8%, 55% 0, 100% 0, 100% 92%, 55% 92%, 50% 100%, 45% 92%, 0 92%, 0 0, 45% 0);
    }

    .inner-block {
        margin: 20px;
        width: 100%;
        text-align: center;
    }

    h1 {
        margin-bottom: 30px;
        line-height: 2.5rem;
    }

    .icon {
        font-size: 20px;
    }

    @media screen and (max-width: 1000px) {
        .inner {
            padding: 80px 40px 120px 40px;
        }
    }

    @media screen and (max-width: 700px) {
        .inner {
            clip-path: polygon(0 0, 35% 0, 50% 5%, 65% 0, 100% 0, 100% 95%, 65% 95%, 50% 100%, 35% 95%, 0 95%);
        }
    }

    @media screen and (max-width: 475px) {
        padding: 20px;

        .inner {
            padding: 60px 20px 80px 20px;
        }

        h1 {
            font-size: 30px;
        }
    }
`;

export default function Challenges() {

  return (
    <ChallengesStyles>
        <div className='inner'>
            <div className='inner-block'>
                <h1>Did You Know?</h1>
                <p><span className='icon' role="img" aria-label="pointing finger">👉</span> 57% of data breaches can be directly attributed to attackers exploiting a known vunerability that had not been patched?</p>
                <p><span className='icon' role="img" aria-label="pointing finger">👉</span> 74% of the companies do not patch fast enough due to lack of staff, skills or resources?</p>
            </div>
            <div className='inner-block'>
                <h1>Why Is Patching Challenging?</h1>
                <p><span className='icon' role="img" aria-label="pointing finger">👉</span> Keeping up with increasing vunerabilities and following regulatory requirements</p>
                <p><span className='icon' role="img" aria-label="pointing finger">👉</span> It is a fact that patching is time consuming and will keep your critical resources underutilized</p>
                <p><span className='icon' role="img" aria-label="pointing finger">👉</span> The expertise and resources required for patching can lead to deviation from the core business</p>
                <p><span className='icon' role="img" aria-label="pointing finger">👉</span> Lacking patching capabilities and expertise can risk your business to a great extent</p>
            </div>
            <div className='inner-block'>
                <StartButton />
            </div>
        </div>
    </ChallengesStyles>
  )
}