import React, { useState, useEffect } from "react";

const GameBubble = () => {
  // Function to generate an array of random numbers
  const generateRandomNumbers = (count) => {
    return Array.from({ length: count }, () => Math.floor(Math.random() * 10));
  };

  // Initialize states
  const [randomNumbers, setRandomNumbers] = useState(
    generateRandomNumbers(180)
  );
  const [hit, setHit] = useState(Math.floor(Math.random() * 10)); // Random hit value between 0 and 9
  const [score, setScore] = useState(10); // Initial score
  const [time, setTime] = useState(60); // Timer in seconds
  const [gameOver, setGameOver] = useState(false);

  // Function to start a new game
  const startNewGame = () => {
    setRandomNumbers(generateRandomNumbers(180));
    setHit(Math.floor(Math.random() * 10));
    setScore(10);
    setTime(60);
    setGameOver(false);
  };

  useEffect(() => {
    if (gameOver) return; // Do not start timer if the game is over

    // Timer countdown logic
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setGameOver(true); // Set game over when time runs out
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [gameOver]);

  // Handle bubble click
  const handleBubbleClick = (number) => {
    if (number === hit) {
      setScore((prevScore) => prevScore + 10); // Update score
      setHit(Math.floor(Math.random() * 10)); // Regenerate hit number
      setRandomNumbers(generateRandomNumbers(180)); // Regenerate bubble numbers
    }
  };

  return (
    <div className="main-container">
      <div className="box-container">
        <div className="top">
          <div className="score-bord">
            <h2>Hit</h2>
            <div className="box">{hit}</div>
          </div>
          <div className="score-bord">
            <h2>Time</h2>
            <div className="box">{time}</div>
          </div>
          <div className="score-bord">
            <h2>Score</h2>
            <div className="box">{score}</div>
          </div>
        </div>
        <div className="bottom">
          {randomNumbers.map((number, index) => (
            <div
              key={index}
              className="bubble"
              onClick={() => handleBubbleClick(number)}
            >
              {number}
            </div>
          ))}
        </div>
        {gameOver && (
          <div className="game-over">
            <h1>Game Over</h1>
            <p>Your final score: {score}</p>
            <button className="start-button" onClick={startNewGame}>
              Start New Game
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameBubble;
