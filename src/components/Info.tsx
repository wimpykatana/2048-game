import React from 'react'

interface InfoProps {
    score: number;
}

const Info = ({score}:InfoProps) => {
  return (
    <div className='mt-2.5'>
      <div className='flex justify-between m-[5px]'>
          <h1 className='flex text-[80px] text-[#776E65] leading-[0.7] justify-center items-center font-bold'>2048</h1>
          <div className="flex flex-col bg-[#8f7a66] text-[#FFF] text-center min-w-[70px] rounded-[3px] p-[3px]">
              <p className="text-[16px]">score</p>
              <h2 className='text-[30px]'>{score}</h2>
          </div>
      </div>
      <div className='mt-4 text-left text-[16px] mb-0.5'>
        Join the numbers and get to the <span className='font-bold'>2048</span> tile!
      </div>
    </div>
  )
}

export default Info