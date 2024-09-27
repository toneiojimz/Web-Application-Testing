import React, {useState} from 'react';
import Display from './Display';
import styled from 'styled-components';

const ActionButtons = styled.div`
   display: flex;
   justify-content: center;
    padding-bottom: 49px;
    padding-right: 7px;

`;

const Buttons =styled.button`
    font-size: 2rem;
    padding: 10px
`;

const Page = styled.div`
  background: orangered;  

`;


const Dashboard = () => {
    
    const [value, setValue] = useState({
        balls: 0,
        strikes: 0
    })

    const handleBall =() =>{
        if (value.balls === 3){
            setValue({balls:0, strikes: 0});
        }else {
            setValue({strikes: value.strikes, balls: value.balls +1 });
        }
    }
    const handleStrike= ()=>{
        if(value.strikes === 2){
            setValue({balls: 0, strikes: 0})
        }else {
            setValue({balls: value.balls, strikes: value.strikes +1});
        }
    }
    const handleFoul = ()=>{
        if(value.strikes <2){
            setValue({balls: value.balls, strikes: value.strikes +1});
        }
    }
    const handleHit = key =>{
        setValue({balls: 0, strikes: 0});
    }

    return (
        <Page>
            <Display data ={value}/>
            <ActionButtons>
            <div>
                <Buttons id='strike' onClick={handleStrike}>Strike</Buttons>    
            </div> 
            <div>
                <Buttons id='ball' onClick={handleBall}>Ball</Buttons>    
            </div>
            <div>
                <Buttons id='foul' onClick={handleFoul}>Foul</Buttons>    
            </div> 
            <div>
                <Buttons id='hit' onClick={handleHit}>Hit</Buttons>    
            </div>        
            </ActionButtons>
        </Page>
    )
}

export default Dashboard;