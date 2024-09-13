import { createContext, useState } from 'react';

interface SearchTermContextType {
  searchTerm: string;
  setSearchTerm: (newTerm: string) => void;
}

export const SearchTermContext = createContext<SearchTermContextType>({
  searchTerm: '',
  setSearchTerm: () => {},
});

function SearchTermProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchTermContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </SearchTermContext.Provider>
  );
}

export default SearchTermProvider;
