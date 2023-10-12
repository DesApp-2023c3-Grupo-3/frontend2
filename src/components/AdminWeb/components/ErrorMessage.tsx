import React from 'react';

function ErrorMessage(message: string, condition: boolean) {
  if (!condition) {
    return null; // No muestra nada si la condición es falsa
  }

  return <p className="text-[red] text-[12px] ml-3 relative">{message}</p>;
}

export default ErrorMessage;
