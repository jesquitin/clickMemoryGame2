import React, { Component } from 'react';
import './App.css';
import CardClicked from "./Components/CardClicked/CardClicked";
import cards from "./cards.json";
import Navbar from "./Components/Navbar/Navbar";
import Modal from "./Components/Modal/Modal"


class App extends Component {
  state = {
    cards: cards,
    clickedCards: [],
    score:0,
    topScore:0
  }



  renderCards = (array) => {
    return this.state.cards.map(card => (
      <section className='col s4 m3 l3' key={card.id} id={card.id}>
        <CardClicked
          name={card.name} 
          image={card.image} />
        
      </section>
      )
    )
  }
  render() {
    return (
          <div className="container-fluid">
          <Navbar score={this.state.score} topScore={this.state.topScore}/>
          <h1 className="App-title">Welcome to React</h1>
          <Modal />
        <br />
       <div className="container row cardWrapper">
       {this.renderCards(this.state.cards)}
       </div>
      </div>
    );
  }
}




export default App;
