import React from 'react';

function Start(props){
    return (
        <div className="start wbs-full-screen">
            <div className="wbs-middle-center">
                <div className="start-header">
                    <h1 className="start-header__title">Catch Me If You Can</h1>
                    <p className="start-header__subtitle">Test your eyes, Try to find a black cat in a black room</p>
                </div>
                <div className="start-content">
                    <div className="start-content__info">You have 10 steps, to catch the cat, step by step the cat will be darker an darker ..</div>
                    <div className="btn start-content__cta" onClick={props.startGame}>Start the game</div>
                </div>
                <div className="start-footer">
                    <p>Just, click on the cat !!!</p>
                    <div>Good luck...</div>
                </div>
            </div>
        </div>
    )
}

export default Start;