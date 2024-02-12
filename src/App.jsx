import { useState } from "react";
import Square from "./components/Square";
import Entrygame from "./components/Entrygame";
import Winneralarm from "./components/Winneralarm";
// import Computermove from "./components/Comutermove";
import xImg from "./assets/Combined Shape Copy 2.png";
import zeroImg from "./assets/Oval Copy.png";
import smallX from "./assets/SmallX.png";
import smallZero from "./assets/oval.png";
import Rotate from "./assets/Rotate.png";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [turn, setTurn] = useState(
    <img className="w-[16px] h-[16px]" src={smallX} alt="x" />
  );
  const [winner, setWinner] = useState(null);
  const [start, setStart] = useState(false);
  const [countX, setCountX] = useState(0);
  const [countO, setCountO] = useState(0);
  const [ties, setTies] = useState(0);
  const [playerO, setPlayerO] = useState(null);
  const [playerX, setPlayerX] = useState(null);
  const [winnerX, setWinnerX] = useState(false);
  const [winnerO, setWinnerO] = useState(false);
  const [tieAlarm, setTieAlarm] = useState(false);

  const handleClick = (i) => {
    if (winner || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    setTurn(turn);

    const winnerFound = defineWinner(nextSquares);
    if (winnerFound) {
      setWinner(playerX === "P1" ? "PLAYER 2 WINS!" : "PLAYER 1 WINS!");
      console.log(playerX);
    } // X როცა არის არჩეული player1-ად რატომ არენდერებს "PLAYER 1 WINS!"?
    if (winnerFound === "X") {
      setCountX(countX + 1);
      setWinnerX(true);
      setWinnerO(false);
    } else if (winnerFound === "O") {
      setCountO(countO + 1);
      setWinnerO(true);
      setWinnerX(false);
    } else if (!winnerFound && nextSquares.every((square) => square !== null)) {
      // Check for a tie only when all squares are filled and there is no winner
      setTies(ties + 1);
      setWinner("TIE"); // You can use any value to represent a tie in the state
    }
    if ((winnerFound === "X") & (playerX === "P1")) {
      setWinner("PLAYER 1 WINS!");
    } else if ((winnerFound === "X") & (playerX === "P2")) {
      setWinner("PLAYER 2 WINS!");
    }
    setTurn(
      xIsNext ? (
        <img className="w-[16px] h-[16px]" src={smallZero} alt="x" />
      ) : (
        <img className="w-[16px] h-[16px]" src={smallX} alt="o" />
      )
    );
  };

  function defineWinner(squares) {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  }
  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setTurn(
      <img
        className="w-[16px] h-[16px]"
        src={xIsNext ? smallX : smallZero}
        alt={xIsNext ? "x" : "o"}
      />
    );
    setWinner(null);
  }

  const handleStartGame = () => {
    resetGame();
    setStart(true);
  };
  const quitHandle = () => {
    window.location.reload();
  };

  return (
    <>
      <Entrygame
        start={start}
        setStart={setStart}
        playerO={playerO}
        setPlayerO={setPlayerO}
        playerX={playerX}
        setPlayerX={setPlayerX}
      />
      <div
        className={` ${
          start
            ? `flex flex-col relative items-center min-h-[100vh] bg-[#1A2A33]`
            : `hidden`
        } `}
      >
        <div className="flex mt-[24px] mb-[64px] bg-[#1A2A33] w-[327px] h-[40px] justify-between">
          <div className="flex flex-row w-[72px] h-[32px] justify-between">
            <img src={xImg} alt="X" />
            <img src={zeroImg} alt="0" />
          </div>
          <div className="flex flex-row justify-around items-center w-[96px] h-[40px] rounded-[5px] bg-[#1F3641]">
            <span>{turn}</span>
            <span className="text-[#A8BFC9] text-[14px] font-bold">TURN</span>
          </div>
          <div
            onClick={handleStartGame}
            className="flex justify-center items-center bg-[#A8BFC9] w-[40px] h-[40px] cursor-pointer rounded-[5px]"
          >
            <img src={Rotate} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center mb-[32px]">
          <div className="flex gap-[20px] mb-[20px]">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="flex gap-[20px] mb-[20px]">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="flex gap-[20px]">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>
        <div className="flex w-[328px] justify-between">
          <div className="flex flex-col items-center w-[96px] h-[64px] bg-[#31C3BD] rounded-[10px] justify-center">
            <span className="text-[12px]">X {playerX}</span>
            <span className=" text-[20px] font-bold">{countX}</span>
          </div>
          <div className="flex flex-col items-center w-[96px] h-[64px] bg-[#A8BFC9] rounded-[10px] justify-center">
            <span className="text-[12px]">TIES</span>
            <span className=" text-[20px] font-bold">{ties}</span>
          </div>
          <div className="flex flex-col items-center w-[96px] h-[64px] bg-[#F2B137] rounded-[10px] justify-center">
            <span className="text-[12px]">O {playerO}</span>
            <span className=" text-[20px] font-bold">{countO}</span>
          </div>
        </div>
        <Winneralarm
          winner={winner}
          handleStartGame={handleStartGame}
          winnerX={winnerX}
          winnerO={winnerO}
          tieAlarm={tieAlarm}
          quitHandle={quitHandle}
        />
      </div>
      {/* {xIsNext && !winner && (
        <Computermove
          squares={squares}
          setSquares={setSquares}
          setXIsNext={setXIsNext}
          setTurn={setTurn}
          defineWinner={defineWinner}
          winner={winner}
          setWinner={setWinner}
          countX={countX}
          setCountX={setCountX}
          countO={countO}
          setCountO={setCountO}
          ties={ties}
          setTies={setTies}
        />
      )} */}
    </>
  );
}

export default App;
