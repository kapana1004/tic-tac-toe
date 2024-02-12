// ComputerMove.jsx
import React, { useEffect } from "react";
import smallX from "../../public/assets/SmallX.png";

const Computermove = ({
  squares,
  setSquares,
  setXIsNext,
  setTurn,
  defineWinner,
  winner,
  setWinner,
  countX,
  setCountX,
  countO,
  setCountO,
  ties,
  setTies,
}) => {
  useEffect(() => {
    if (!winner) {
      // Check if it's the player's turn (X) and there is a valid move
      const playerMoveIndex = squares.findIndex((square) => square === "X");

      if (playerMoveIndex !== -1) {
        // Make a random move for the computer
        const emptySquares = squares.reduce((acc, value, index) => {
          if (!value) {
            acc.push(index);
          }
          return acc;
        }, []);

        if (emptySquares.length > 0) {
          const randomIndex = Math.floor(Math.random() * emptySquares.length);
          const computerMove = emptySquares[randomIndex];

          const nextSquares = squares.slice();
          nextSquares[computerMove] = "O";

          setSquares(nextSquares);
          setXIsNext(true); // Switch back to player's turn
          setTurn(<img className="w-[16px] h-[16px]" src={smallX} alt="x" />);

          const winnerFound = defineWinner(nextSquares);
          if (winnerFound) {
            setWinner(winnerFound);
            if (winnerFound === "O") {
              setCountO(countO + 1);
            }
          } else if (
            !winnerFound &&
            nextSquares.every((square) => square !== null)
          ) {
            // Check for a tie only when all squares are filled and there is no winner
            setTies(ties + 1);
            setWinner("TIE"); // You can use any value to represent a tie in the state
          }
        }
      }
    }
  }, [
    squares,
    setSquares,
    setXIsNext,
    setTurn,
    defineWinner,
    winner,
    setWinner,
    countO,
    setCountO,
    countX,
    setCountX,
    ties,
    setTies,
  ]);

  return null; // This component doesn't render anything visible
};

export default Computermove;
