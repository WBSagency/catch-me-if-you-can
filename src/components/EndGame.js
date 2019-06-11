import React from 'react';

function EndGame(props){
    return (
        <div className="end wbs-full-screen">
            <div className="end-content wbs-middle-center">
                <h1>Congratulations !!!</h1>
                <h3>You are awesome, you did it</h3>
                <div className="btn" onClick={props.startGame}>Start again</div>
            </div>
        </div>
    )
}

export default EndGame;