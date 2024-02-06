import React from "react";
import xImg from "../assets/Combined Shape Copy 2.png";
import zeroImg from "../assets/Oval Copy.png";
import smallX from "../assets/SmallX.png";
import smallZero from "../assets/oval.png";

export default function Entrygame({ start, setStart }) {
  const handleGameStart = () => {
    setStart(!start);
  };
  return (
    <div
      className={` ${
        !start
          ? `flex flex-col justify-center 
    items-center min-h-[100vh] bg-[#1A2A33]`
          : `hidden`
      } `}
    >
      <div className=" flex flex-row w-[72px] h-[32px] justify-between mb-[25px]">
        <img className=" w-[32px] h-[32px]" src={xImg} alt="X" />
        <img className=" w-[32px] h-[32px]" src={zeroImg} alt="O" />
      </div>

      <div className=" flex w-[327px] h-[205px]  bg-[#1F3641] rounded-[10px] flex-col items-center">
        <span className="  text-[#A8BFC9] mt-[20px] ">
          PICK PLAYER 1’S MARK
        </span>
        <div className=" flex w-[279px] h-[72px] mt-[20px] bg-[#1A2A33] rounded-[10px] justify-around items-center ">
          <div className=" flex justify-center items-center w-[132px] h-[54px] rounded-[5px] hover:bg-[#31C3BD] cursor-pointer ">
            <img className=" w-[32px] h-[32px]" src={smallX} alt="x" />
          </div>
          <div className=" flex justify-center items-center w-[132px] h-[54px] rounded-[5px] hover:bg-[#F2B137] cursor-pointer">
            <img className=" w-[32px] h-[32px]" src={smallZero} alt="" />
          </div>
        </div>
        <span className=" text-[#A8BFC9] text-[12px] font-light mt-[20px] ">
          {" "}
          REMEMBER : X GOES FIRST
        </span>
      </div>

      <div className=" flex w-[327px] h-[56px] bg-[#F2B137] hover:bg-[#FFC860] cursor-pointer rounded-[10px] mt-[30px] justify-center items-center">
        {" "}
        <span className=" font-bold">NEW GAME (VS CPU)</span>
      </div>
      <div
        onClick={handleGameStart}
        className=" flex w-[327px] h-[56px] bg-[#31C3BD] hover:bg-[#65E9E4] cursor-pointer rounded-[10px] mt-[17px] justify-center items-center"
      >
        {" "}
        <span className=" font-bold">NEW GAME (VS PLAYER)</span>
      </div>
    </div>
  );
}