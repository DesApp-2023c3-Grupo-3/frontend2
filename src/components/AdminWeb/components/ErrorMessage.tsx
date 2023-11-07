import React from 'react';

function ErrorMessage(message: string, condition: boolean) {
  if (!condition) {
    return null; // No muestra nada si la condición es falsa
  }

  return (
    <span className="text-[red] text-[12px] ml-3 relative">{message}</span>
  );
}

export default ErrorMessage;
