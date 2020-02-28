import React, { Component } from 'react';
import '../Card/index.css';
import CardListData from "../../data/data.json";

const cardData = CardListData.cards;

class CardList extends Component {

  remove(i){
    //   console.log(cardData[].title + " has been clicked");
      
    //   let arr = this.state.cardData;
    //   arr.splice(i, 1);
    //   this.setState({cardData: arr});
    // console.log(this.cardData[i].title)
  }

  render(){
  return (
    <div>
        {cardData.map(s => (
        <div className="card">
            <button className="close" onClick={this.remove} >x</button>
            <h3>{s.title}</h3>
            <p>{s.content}</p>
        </div>
        ))}
    </div>
    );
  }
}

export default CardList;