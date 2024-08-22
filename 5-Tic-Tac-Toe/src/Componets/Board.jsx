import React, { useEffect } from "react";
import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [Board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [Xscore, setXscore] = useState(0);
  const [Oscore, setOscore] = useState(0);

  const handleClickButton = (index) => {
    if (Board[index] || winner) {
      return;
    }
    const newBoard = [...Board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };
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

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (Board[a] && Board[a] === Board[b] && Board[a] === Board[c]) {
        return Board[a];
      }
    }
    return null;
  };

  const winner = checkWinner(Board);

  useEffect(() => {
    if (winner) {
      if (winner === "X") {
        setXscore((prevScore) => prevScore + 1);
      } else {
        setOscore((prevScore) => prevScore + 1);
      }
    }
  }, [winner]);

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  const handleScoreReset = () => {
    setXscore(0);
    setOscore(0);
  };

  return (
    <div className="container">
      <h1 className="title">
        Tic Toc Toe Game In <span>React js</span>
      </h1>
      {winner && (
        <h1 className="title">
          The winner is:<span>{winner}</span>
        </h1>
      )}
      <div className="container-boxes">
      <div className="boards">
        <div className="board1">
          <div className="row1">
            <Square OnClickTab={() => handleClickButton(0)} value={Board[0]} />
            <Square OnClickTab={() => handleClickButton(1)} value={Board[1]} />
            <Square OnClickTab={() => handleClickButton(2)} value={Board[2]} />
          </div>
          <div className="row1">
            <Square OnClickTab={() => handleClickButton(3)} value={Board[3]} />
            <Square OnClickTab={() => handleClickButton(4)} value={Board[4]} />
            <Square OnClickTab={() => handleClickButton(5)} value={Board[5]} />
          </div>
          <div className="row1">
            <Square OnClickTab={() => handleClickButton(6)} value={Board[6]} />
            <Square OnClickTab={() => handleClickButton(7)} value={Board[7]} />
            <Square OnClickTab={() => handleClickButton(8)} value={Board[8]} />
          </div>
        </div>
        <button className="reset-btn" onClick={handleReset}>
          Play again
        </button>
      </div>

      <div className="scoreBords">
        <div className="board2">
          <div className="score-board">
            <p>{Xscore}</p>
            <h5 className="score-name">X Score</h5>
          </div>
          <div className="score-board">
            <p>{Oscore}</p>
            <h5 className="score-name">O Score</h5>
          </div>
        </div>
        <button className="reset-btn" onClick={handleScoreReset}>
          Reset
        </button>
      </div>
    </div>
    </div>
  );
};

export default Board;
