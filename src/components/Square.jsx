import React from "react";
import xImg from "../../public/assets/Combined Shape Copy 2.png";
import zeroImg from "../../public/assets/Oval Copy.png";

export default function Square({ value, onSquareClick, zeroImg, xImg }) {
  return (
    <button
      onClick={onSquareClick}
      className=" bg-[#1F3641] w-[100px] h-[100px] rounded-[10px] flex justify-center items-center"
    >
      {value === "X" && <img src={xImg} alt="X" />}
      {value === "O" && <img src={zeroImg} alt="O" />}
    </button>
  );
}
