import React from "react";
import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [Board, setBoard] = useState(Array(9).fill(null));
  const[isXTurn,setIsXTurn] = useState(true);

  const handleClickButton = (index) => {
    if (Board[index] || winner) {
      return;
    }
    const newBoard = [...Board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  }

  const checkWinner = (Board) => {
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

    for(let i = 0; i < lines.length; i++){
      const[a,b,c] = lines[i];
      if(Board[a] && Board[a] === Board[b] && Board[a] === Board[c]){
        return Board[a];
      }
    }
    return null
  };

  const winner = checkWinner(Board);


  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  }

  return (
    <div className="container">
      <h1 className="title">
        Tic Toc Toe Game In <span>React js</span>
      </h1>
      {winner && <h1 className="title">
        The winner is:<span>{winner}</span>
      </h1>}
      <div className="boards">
      <div className="board1">
        <div className="row1">
          <Square OnClickTab={() => handleClickButton(0)} value={Board[0]} />
          <Square OnClickTab={() => handleClickButton(1)} value={Board[1]} />
          <Square OnClickTab={() => handleClickButton(2)} value={Board[2]} />
        </div>
        <div className="row2">
          <Square OnClickTab={() => handleClickButton(3)} value={Board[3]} />
          <Square OnClickTab={() => handleClickButton(4)} value={Board[4]} />
          <Square OnClickTab={() => handleClickButton(5)} value={Board[5]} />
        </div>
        <div className="row3">
          <Square OnClickTab={() => handleClickButton(6)} value={Board[6]} />
          <Square OnClickTab={() => handleClickButton(7)} value={Board[7]} />
          <Square OnClickTab={() => handleClickButton(8)} value={Board[8]} />
        </div>
        </div>
        {/* <div className="board2">
          <div className="score-board">
            <p>{xScore}</p>
            <h5 className="score-name">X Score</h5>
          </div>
          <div className="score-board">
            <p>{oScore}</p>
            <h5 className="score-name">O Score</h5>
          </div>
        </div> */}
      </div>
      <button className="reset"
      onClick={handleReset}
      >Play again</button>
    </div>
  );
};

export default Board;
