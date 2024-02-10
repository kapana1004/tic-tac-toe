import React from "react";
import xImg from "../assets/Combined Shape Copy 2.png";
import zeroImg from "../assets/Oval Copy.png";

export default function Winneralarm({
  winner,
  handleStartGame,

  winnerX,
  winnerO,
  tieAlarm,
}) {
  return (
    <div
      className={`${
        winner
          ? `flex flex-col w-[375px] h-[228px] justify-center items-center absolute top-[27%] bg-[#1F3641]`
          : `hidden`
      }`}
    >
      <div className=" w-[280px] h-[140px] flex flex-col justify-around items-center">
        <span className=" text-white text-[14px]">Winner: {winner}</span>
        <div className=" flex flex-row">
          <img
            className={`${winnerX ? ` w-[30px] h-[30px]` : `hidden`}`}
            src={xImg}
            alt="X"
          />
          <img
            className={` ${winnerO ? ` w-[30px] h-[30px]` : `hidden`}`}
            src={zeroImg}
            alt="O"
          />
          <span className=" text-white text-[24px]">TAKES THE ROUND</span>{" "}
        </div>

        <div className=" flex flex-row w-[238px] h-[52px] justify-between ">
          <button className=" w-[75px] rounded-[10px] bg-[#A8BFC9]">
            QUIT
          </button>
          <button
            onClick={handleStartGame}
            className=" bg-[#F2B137] w-[146px] cursor-pointer rounded-[10px]"
          >
            NEXT ROUND
          </button>
        </div>
      </div>
    </div>
  );
}
