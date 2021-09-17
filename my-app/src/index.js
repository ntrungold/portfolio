import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// setting up a basic answer list to an associated question. The idea would be to have the answers associate to another sheet with
class AnswerList extends React.Component {
    render() {
      return (
        <div className="answer-list">
          <h1>Answer List for {this.props.name}</h1>
          <ul> 
            <li>Answer1</li>
            <li>Answer2</li>
            <li>Answer3</li>
            <li>Answer4</li>
            <li>Answer5</li>
            <li>Answer6</li>
            <li>Answer7</li>
            <li>Answer8</li>
          </ul>
        </div>
      );
    }
  }
  //trying to make a click show an answer
  class Rectangle extends React.Component {
    render() {
      return (
        <button className="rectangle" onClick={function() { console.log('click'); }}>
          {this.props.value}
        </button>
      );
    }
  }