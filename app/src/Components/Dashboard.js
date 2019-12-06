import React, {useState} from 'react';
import Display from './Display';


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
        <div>
            <Display data ={value}/>
            <div className='center'>
            <div className='some-space'>
                <button id='strike' onClick={handleStrike}>Strike</button>    
            </div> 
            <div className='some-space'>
                <button id='ball' onClick={handleBall}>Ball</button>    
            </div>
            <div className='some-space'>
                <button id='foul' onClick={handleFoul}>Foul</button>    
            </div> 
            <div className='some-space'>
                <button id='hit' onClick={handleHit}>Hit</button>    
            </div>        
            </div>
        </div>
    )
}

export default Dashboard;