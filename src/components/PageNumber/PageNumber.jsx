import classes from './PageNumber.module.scss';
import { useContext } from 'react';
import { SearchResultContext } from '../../context/SearchResultContextProvider';
import { searchBooks } from '../../utilities/books';
const PageNumber = ({ value, searchValue }) => {
  const { setResults, setCurrPage, currPage } = useContext(SearchResultContext);
  let type = '';
  switch (value) {
    case '...':
    case currPage:
      type = 'disabled';
      break;
    case 0:
      type = 'hidden';
      break;
    default:
      type = 'enabled';
  }
  const changePage = () => {
    const index = (Number(value) - 1) * 12;
    searchBooks(searchValue, index)
      .then((data) => {
        setCurrPage(Number(value));
        setResults(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {type === 'disabled' && (
        <div className={classes.text__wrapper}>
          <p className={classes.page__text}>{value}</p>
        </div>
      )}
      {type === 'enabled' && (
        <button className={classes.page__button} onClick={changePage}>
          <p className={classes.page__text}>{value}</p>
        </button>
      )}
    </>
  );
};

export default PageNumber;
