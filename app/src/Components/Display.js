import React from 'react';
import giants from './giants.png';
import styled from 'styled-components';

const Giants = styled.img`
    margin-left: 140px;
    max-height: 585px;
  
`;
const Ballstrike = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 57px;
`;

const Score = styled.div`
    font-size: 1.5rem;

`;

const Display = (props) => {

    return(
        <div>
            <Giants src={giants} alt= 'Giants Baseball Logo'/>
            <Ballstrike>
            <Score>
                <h2>Balls</h2>
                <p>{props.data.balls}</p>
            </Score>
            <Score>
                <h2>Strikes</h2>
                <p>{props.data.strikes}</p>
            </Score>
            </Ballstrike>
        </div>
    )
    
}

export default Display;