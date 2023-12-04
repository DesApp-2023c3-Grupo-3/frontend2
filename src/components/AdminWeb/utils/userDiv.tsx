import * as React from 'react';

export function userDiv(name: string) {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  return (
    <div
      className={`m-2 flex justify-center items-center text-white font-[500] bg-[#2C9CBF] rounded-full w-[60px] h-[60px] text-center
      ${
        isMobile
          ? 'text-[18px] w-[40px] max-w-[40px] max-h-[40px] h-[40px]'
          : 'text-[30px]'
      }
      `}
    >
      {name}
    </div>
  );
}
