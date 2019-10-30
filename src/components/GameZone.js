import React, { Component } from "react";
import Characters from "./../data/Characters";

class GameZone extends Component {
  state = {
    Characters,
    active: true,
    message: "Good Luck!",
    score: 0,
    highestScore: 0,
    arrCharacterClicked: []
  };
  

  
  play = characterId => {

    this.setState({
      score: this.state.score + 1
    });

    //Filtering the object that was clicked from the Characters propery in the state object
    let getCharactersId = Characters.filter(getCharacterId => {
      return getCharacterId.id === characterId;
    });
    //Filtering the object that was clicked from the Characters propery in the state object
    let checkArrCharacterClicked = this.state.arrCharacterClicked.filter(
      item => {
        return item.id === characterId;
      }
    );
    //filtering the checkArrCharacterClicked variable
    let checked = checkArrCharacterClicked.filter(idExist => {
      return idExist.id === characterId;
    });

    //Checking if  OFJECT IS MORE THAN ONCE IN the checked variable
    if (checked.length > 0) {
      this.setState({
        highestScore: this.state.score,
        score: 0,
        message: "You Lost",
        arrCharacterClicked: []
      });

      if (this.state.score < this.state.highestScore) {
        this.setState({
          highestScore: this.state.highestScore
        });
      }
    } else {
      if (this.state.score < this.state.highestScore) {
        this.setState({
          message: "Nice You Got this!",
          highestScore: this.state.highestScore
        });
      } else {
        this.setState({
          message: "Nice You're Winning!",
          highestScore: this.state.highestScore + 1
        });
      }

      // If the object id that was clicked is not in the arrCharacterClicked
      //Then  This push the getCharactersId variable into the arrCharacterClicked Array in the state object

      this.state.arrCharacterClicked.push(getCharactersId[0]);
    }

    // //filtering the arrCharacterClicked propery in the state object
    //     let clicked = this.state.arrCharacterClicked.filter((characterClicked) =>{
    // return characterClicked.id == characterId
    //     }).length >= 1;

    // console.log(clicked)
  };

  componentDidUpdate() {
  let message = document.getElementById("message");
    let HighestScore = document.getElementById("highestScore");
    let score = document.getElementById("score");

    message.innerHTML = this.state.message;
    HighestScore.innerHTML = this.state.highestScore;
    score.innerHTML = this.state.score;
  }

  render() {
    
  

    let characters = this.state.Characters.map((character)=> {

      return (
        <div
          onClick={() => this.play(character.id)}
          className="character-card  col"
        >
          <div className="card  bg-dark text-white">
            <img
              id={character.id}
              src={character.image}
              className=" character-image card-img"
              alt="..."
            ></img>
          </div>
        </div>
      );
    });

    let shuffleArray = (array) => {
      let i = array.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }
  
         

          

    return (
      <div className="container-fluid card-container">
        <div className="row">{shuffleArray(characters)}</div>
      </div>
    );
  }
  componentDidMount() {
    let message = document.getElementById("message");
    let HighestScore = document.getElementById("highestScore");
    let score = document.getElementById("score");

    message.innerHTML = this.state.message;
    HighestScore.innerHTML = this.state.highestScore;
    score.innerHTML = this.state.score;
  }
}

export default GameZone;
