import React from 'react';

interface SquareProps {
  val?: number
}

const Square = ({ val = 2048 }: SquareProps) => {

  const bgColors = (val: number) => {
    switch (val) {
      case 2:
        return 'bg-[#EEE4DA]';
      case 4:
        return 'bg-[#EDE0C8]';
      case 8:
        return 'bg-[#F2B179]';
      case 16:
        return 'bg-[#F59563]';
      case 32:
        return 'bg-[#F67C5F]';
      case 64:
        return 'bg-[#F65E3B]';
      case 128:
        return 'bg-[#EDCF72]';
      case 256:
        return 'bg-[#EDCC61]';
      case 512:
        return 'bg-[#EDC850]';
      case 1024:
        return 'bg-[#EDC53F]';
      case 2048:
        return 'bg-[#EDC22E]';
      default:
        return 'bg-[#3C3A32]';
    }
  }

  const textSizes = (val: number) => {
    if (val < 100) {
      return 'text-[60px]';
    } else if (val < 1000) {
      return 'text-[50px]';
    } else {
      return 'text-[30px]';
    }
  }


  if (val === 0) {
    return (
      <div className="w-[100px] h-[100px] m-[7px] rounded-[3px] bg-[#afa192]">
      </div>
    )
  }
  return (
    <div className={`flex justify-center items-center w-[100px] h-[100px] m-[7px] rounded-[3px] ${bgColors(val)} text-[#AFA192] font-bold text-center ${textSizes(val)} leading-[1.6]`}>
       {val}
    </div>
  )
}

export default Square