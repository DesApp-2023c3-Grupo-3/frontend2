import React from 'react';
import './tableStyle.sass';

function SearchBar({
  searchTerm,
  onSearchChange,
  placeholder = 'Buscar',
}: {
  searchTerm: string;
  onSearchChange: (newTerm: string) => void;
  placeholder?: string;
}) {
  const [isMobile, setIsMobile] = React.useState(
    window.matchMedia('(max-width: 768px)').matches,
  );

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <div className={`flex justify-end`}>
      {!isMobile ? (
        desktopSearch(searchTerm, onSearchChange, placeholder)
      ) : (
        <div id="searchmobile" className="container py-[3px] relative w-[90%]">
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            className="z-[-1]"
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <div className="search"></div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;

function desktopSearch(
  searchTerm: string,
  onSearchChange: (newTerm: string) => void,
  placeholder: string,
) {
  return (
    <div
      id="input"
      className="flex justify-end border-2 hover:border-[3px] border-[#484848] rounded-[55px] py-[10px] w-[390px] cursor-text h-[55px] translate-y-[-10%]"
    >
      <div className="flex items-center">{lupa}</div>
      <input
        className="w-[85%] mx-2 outline-none text-[20px]"
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

const lupa = (
  <svg
    width="29"
    height="31"
    viewBox="0 0 29 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.6833 27.125L16.0708 18.9875C15.4667 19.5042 14.7719 19.9132 13.9865 20.2146C13.201 20.516 12.3653 20.6667 11.4792 20.6667C9.28403 20.6667 7.42642 19.8538 5.90633 18.228C4.38625 16.6022 3.62581 14.6165 3.625 12.2708C3.625 9.92431 4.38544 7.93858 5.90633 6.31367C7.42722 4.68875 9.28483 3.87586 11.4792 3.875C13.6743 3.875 15.5319 4.68789 17.052 6.31367C18.5721 7.93944 19.3325 9.92517 19.3333 12.2708C19.3333 13.2181 19.1924 14.1115 18.9104 14.951C18.6285 15.7906 18.2458 16.5333 17.7625 17.1792L25.375 25.3167L23.6833 27.125ZM11.4792 18.0833C12.9896 18.0833 14.2736 17.518 15.3313 16.3874C16.389 15.2567 16.9175 13.8846 16.9167 12.2708C16.9167 10.6562 16.3878 9.28364 15.3301 8.153C14.2724 7.02236 12.9888 6.45747 11.4792 6.45833C9.96875 6.45833 8.68469 7.02365 7.627 8.15429C6.56931 9.28493 6.04086 10.6571 6.04167 12.2708C6.04167 13.8854 6.57051 15.258 7.62821 16.3887C8.6859 17.5193 9.96956 18.0842 11.4792 18.0833Z"
      fill="#484848"
    />
  </svg>
);
