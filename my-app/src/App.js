import React from 'react';
import { useState } from "react";
import  './index.css';
import './Steve-Harvey.jpg';
import Header from './components/Header';
import Sets from './components/Sets';

const App = () =>{

    const[sets, setSets] = useState([
        {
            id: 1,
            question: 'Question 1',
        },
        {
            id: 2,
            question: 'Question 2',
        },
    ])


    return (
        <div className='container'>
            <Header />
            <Sets sets={sets} />
        </div>
    )
}


export default App


/*
function Rectangle(props) {
    return (
      <button className ="rectangle" onClick=
  {props.onClick}>
        {props.value}
      </button>
    );
  }
  
  function calculateWinner(props) { 
    return(
      props.score
    );
  }
  
  class Board extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        rectangles: Array(8).fill(null),
        xIsNext: true,
      };
    }
    handleClick(i){
      const rectangles = this.state.rectangles.slice();
      if (calculateWinner(rectangles) || rectangles[i]) {
        return;
      }
      rectangles[i] = this.state.xIsNext ? 'Team 1' : 'Team 2';
      this.setState({
        rectangles: rectangles,
        xIsNext: !this.state.xIsNext,
      });
    }
    renderRectangle(i) {
      return (
        <Rectangle 
        value={this.state.rectangles[i]} 
         onClick={() => this.handleClick(i)}
        />
        );
    }
  
   render() {
      const winner = calculateWinner(this.state.rectangles);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'Team 1' : 'Team 2');
      }
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            
          </div>
          <div className="board-row">
            {this.renderSquare(2)}
            {this.renderSquare(3)}
          </div>
          <div className="board-row">
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
          </div>
        </div>
      );
    }
  }
  */
 /*
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status }</div>
            <ol>{/* TODO }</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  //passing the main game element to be rendered
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
*/