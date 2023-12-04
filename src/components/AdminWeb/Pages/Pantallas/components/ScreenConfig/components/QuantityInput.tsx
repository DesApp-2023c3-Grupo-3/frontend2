import { ChangeEvent, useState } from 'react';

export default function QuantityInput({
  intervalTime,
  title,
  onChange,
}: {
  intervalTime: number;
  title: string;
  onChange: (newConfig: number) => void;
}) {
  const [count, setCount] = useState(intervalTime);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(Number(event.currentTarget.value), 1);
    setCount(newValue);
    onChange(newValue);
  };

  const handleClick = (result: number) => {
    setCount(result);
    onChange(result);
  };

  return (
    <div className="flex flex-col text-sm md:text-2xl items-center">
      <span className="text-black">{title}</span>
      <label className="flex gap-4 items-center text-[#2C9CBF] font-semibold">
        {count < 2 ? (
          <span className="text-gray-500">-</span>
        ) : (
          <button onClick={() => handleClick(count - 1)}>-</button>
        )}
        <input
          type="text"
          placeholder="15"
          value={intervalTime}
          onChange={handleChange}
          className="text-center text-[#484848] w-10 border-2 rounded border-[#BFBFBF]"
        />
        <button onClick={() => handleClick(count + 1)}>+</button>
      </label>
    </div>
  );
}
