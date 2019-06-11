import React from 'react';

function Play(props){
    let windWidth = window.innerWidth;
    let windHeight = window.innerHeight;
    let catSize = windWidth / 12;
    let randomX = Math.floor(Math.random() * (windWidth - catSize));
    let randomY = Math.floor(Math.random() * (windHeight - catSize));

   

    
    let randomStyles = {
        // top : 'calc(100% - '+ catSize +'px - '+ randomX +'%)',
        // left : 'calc(100% - '+ catSize +'px - '+ randomY +'%)',
        top : randomY + 'px',
        left : randomX + 'px',
        opacity : props.catOpacity
    }

    

    return (
        <div className="play">
            <div className="play-area wbs-full-screen">
                <div 
                    className="the-cat"
                    style={randomStyles}
                    onClick={props.nextStep}
                >
                </div>
            </div>
            <div className="popup-message wbs-middle-center">
                <div className="message-step">{props.gameStep}</div>
                <div className="message-result">You found it</div>
                <div className="message-joke">How you did that, you are superhero</div>
                <div className="btn message-cta" onClick={props.nextStep}>Continue</div>
            </div>            
        </div>
    )
}

export default Play;