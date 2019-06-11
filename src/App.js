import React from 'react';
import Start from './components/Start';
import Play from './components/Play';
import EndGame from './components/EndGame';
import './App.css';


class App extends React.Component {

  state = {
    start  : true,
    play : false,
    end :false,
    catOpacity : 0.93,
    gameStep : 1
  }

  startGame = () => {
    this.setState({
      start: false,
      play: true,
      end: false,
      catOpacity : 0.93,
      gameStep : 1
    })
  }

  nextStep = () => {

    this.setState((prevstate)=>{
      return {
        catOpacity: prevstate.catOpacity - 0.1,
        gameStep: prevstate.gameStep + 1
      }
    })

    if(this.state.gameStep === 10){
      this.setState(
        {
          end: true,
          play: false
        }
      )
    }

    
  }

  render (){
    return (
      <div>
        {this.state.start && <Start startGame={this.startGame}/>}
        {this.state.play && <Play nextStep={this.nextStep}  gameStep={this.state.gameStep} catOpacity={this.state.catOpacity}/>}
        {this.state.end && <EndGame startGame={this.startGame}/>}
      </div>
    );
  }
 
}

export default App;
