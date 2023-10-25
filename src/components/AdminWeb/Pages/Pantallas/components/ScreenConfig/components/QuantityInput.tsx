import { ChangeEvent, useState } from 'react';

export default function QuantityInput({ title }: { title: string }) {
  const [count, setCount] = useState(15);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(Math.max(Number(event.currentTarget.value), 1));
  };

  return (
    <div className="flex flex-col text-2xl items-center">
      <span className="text-black">{title}</span>
      <label className="flex gap-4 items-center text-[#2C9CBF] font-semibold">
        {count < 2 ? (
          <span className="text-gray-500">-</span>
        ) : (
          <button onClick={() => setCount(count - 1)}>-</button>
        )}
        <input
          type="text"
          placeholder="15"
          value={count}
          onChange={handleChange}
          className="text-center text-[#484848] w-10 border-2 rounded border-[#BFBFBF]"
        />
        <button onClick={() => setCount(count + 1)}>+</button>
      </label>
    </div>
  );
}
