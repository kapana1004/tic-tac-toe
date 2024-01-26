import React from "react";

export default function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className=" bg-[#1F3641] w-[100px] h-[100px] rounded-[10px]"
    >
      {value}
    </button>
  );
}
