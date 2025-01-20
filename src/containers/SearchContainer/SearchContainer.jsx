import classes from './SearchContainer.module.scss';
import { useState, useEffect, useContext } from 'react';
import { searchBooks } from '../../utilities/books';
import { SearchResultContext } from '../../context/SearchResultContextProvider';
import Error from '../../components/Error/Error';
import SearchBar from '../../components/SearchBar/SearchBar';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import Skeleton from '../../components/Skeleton/Skeleton';
const SearchContainer = () => {
  const [searchValue, setSearchValue] = useState(null);
  const {
    setResults,
    setCurrPage,
    setTotalPages,
    searchStatus,
    setSearchStatus,
    setSearchError,
  } = useContext(SearchResultContext);
  useEffect(() => {
    if (searchValue === null) {
      return;
    }
    setSearchStatus('LOADING');
    searchBooks(searchValue)
      .then((data) => {
        setSearchStatus('SUCCESS');
        setCurrPage(1);
        setTotalPages(data.totalPages);
        setResults(data.data);
      })
      .catch((e) => {
        console.log(e);
        setSearchError(e);
        setSearchStatus('FAILURE');
      });
  }, [searchValue]);
  return (
    <section className={classes.wrapper}>
      <SearchBar setSearchValue={setSearchValue} />
      {searchStatus === 'LOADING' && <Skeleton />}
      {searchStatus === 'SUCCESS' && (
        <ResultsContainer searchValue={searchValue} />
      )}
      {/* {searchStatus === 'SUCCESS' && <Skeleton />} */}
      {searchStatus === 'FAILURE' && <Error />}
    </section>
  );
};
export default SearchContainer;
