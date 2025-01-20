import { createContext, useState } from 'react';

export const SearchResultContext = createContext('');

const SearchResultContextProvider = ({ children }) => {
  const [currPage, setCurrPage] = useState('');
  const [results, setResults] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [searchStatus, setSearchStatus] = useState(null);
  const [searchError, setSearchError] = useState('');
  return (
    <SearchResultContext.Provider
      value={{
        results,
        setResults,
        currPage,
        setCurrPage,
        totalPages,
        setTotalPages,
        searchStatus,
        setSearchStatus,
        searchError,
        setSearchError,
      }}
    >
      {children}
    </SearchResultContext.Provider>
  );
};

export default SearchResultContextProvider;
