import * as React from 'react';

export function userDiv(name: string) {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  return (
    <div
      className={`m-2 flex justify-center items-center text-white font-[500] bg-[#2C9CBF] rounded-full w-[30px] h-[30px] text-center aspect-square
      ${
        isMobile
          ? 'text-[18px] w-[40px] max-w-[40px] max-h-[40px] h-[40px]'
          : 'text-[15px]'
      }
      `}
    >
      {name}
    </div>
  );
}
