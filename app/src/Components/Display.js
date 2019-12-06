import React from 'react';

const Display = (props) => {

    return(
<div>
    <h2>At Bat</h2>
    <div>
        <h2>Balls</h2>
        <p>{props.data.balls}</p>
    </div>
    <div>
        <h2>Strikes</h2>
        <p>{props.data.strikes}</p>
    </div>
</div>
    )
    
}

export default Display;