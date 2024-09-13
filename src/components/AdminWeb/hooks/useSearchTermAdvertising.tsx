import { useContext } from 'react';
import { SearchTermContext } from '../context/SearchTerm/SearchTermProvider';

function useSearchTerm() {
  const { searchTerm, setSearchTerm } = useContext(SearchTermContext);
  return { searchTerm, setSearchTerm };
}

export default useSearchTerm;
