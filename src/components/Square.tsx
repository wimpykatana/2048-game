import React from 'react';

interface SquareProps {
  val?: number
}

const Square = ({ val = 2048 }: SquareProps) => {
  if (val === 0) {
    return (
      <div className="w-[100px] h-[100px] m-[7px] rounded-[3px] bg-[#EEE4DA] text-[#AFA192] font-bold text-center text-[60px] leading-[1.6]">
      </div>
    )
  }
  return (
    <div className={`flex justify-center items-center w-[100px] h-[100px] m-[7px] rounded-[3px] bg-[#EEE4DA] text-[#AFA192] font-bold text-center text-[35px] leading-[1.6]`}>
       {val}
    </div>
  )
}

export default Square