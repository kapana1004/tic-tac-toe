import { useState } from "react";
import Square from "./components/Square";
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

  function handleClick(i) {
    if (squares[i]) return;
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = <img className=" pl-[30px]" src={xImg} alt="X" />;

      setTurn(<img className="w-[16px] h-[16px]" src={smallZero} alt="0" />);
    } else {
      nextSquares[i] = <img className=" pl-[30px]" src={zeroImg} alt="0" />;
      setTurn(<img className="w-[16px] h-[16px]" src={smallX} alt="x" />);
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div className=" flex flex-col  items-center min-h-[100vh] bg-[#1A2A33]">
      <div className=" flex mt-[24px] mb-[64px] bg-[#1A2A33] w-[327px] h-[40px] justify-between">
        <div className=" flex flex-row w-[72px] h-[32px] justify-between">
          <img src={xImg} alt="X" />
          <img src={zeroImg} alt="0" />
        </div>
        <div className=" flex flex-row justify-around items-center w-[96px] h-[40px] rounded-[5px] bg-[#1F3641]">
          {" "}
          {/* <img className=" w-[16px] h-[16px]" src={smallX} alt="x" /> */}
          <span>{turn}</span>
          <span className=" text-[#A8BFC9] text-[14px] font-bold"> TURN</span>
        </div>
        <div className=" flex justify-center items-center bg-[#A8BFC9] w-[40px] h-[40px] rounded-[5px]">
          {" "}
          <img src={Rotate} alt="" />
        </div>
      </div>
      <div className=" flex flex-col  items-center mb-[32px]">
        <div className=" flex gap-[20px] mb-[20px] ">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className=" flex gap-[20px] mb-[20px]">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>

        <div className=" flex gap-[20px]">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <div className=" flex w-[328px] justify-between">
        {" "}
        <div className=" flex w-[96px] h-[64px] bg-[#31C3BD] rounded-[10px] justify-center">
          <span className=" text-[12px]">X (P2)</span>
        </div>
        <div className=" flex w-[96px] h-[64px] bg-[#A8BFC9] rounded-[10px] justify-center">
          {" "}
          <span className=" text-[12px]"> TIES</span>
        </div>
        <div className=" flex w-[96px] h-[64px] bg-[#F2B137] rounded-[10px] justify-center">
          <span className=" text-[12px]"> O (P1)</span>
        </div>
      </div>
    </div>
  );
}

export default App;
