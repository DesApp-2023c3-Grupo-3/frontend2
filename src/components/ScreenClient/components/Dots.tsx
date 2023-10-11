function Dots({
  sx,
  selectedIndex,
  items,
}: {
  sx: string;
  selectedIndex: number;
  items: any;
}) {
  return (
    <div className={`${sx} flex`}>
      {items.map((item: any, index: number) => (
        <svg
          key={index}
          className="h-[3.6vh]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            fill={`${selectedIndex === index ? '#A6A6A6' : '#D9D9D9'}`}
            d="M24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33Z"
          />
        </svg>
      ))}
    </div>
  );
}

export default Dots;
