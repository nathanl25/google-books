import classes from './Results.module.scss';
import CardContainer from '../../containers/CardContainer/CardContainer';
import { SearchResultContext } from '../../context/SearchResultContextProvider';
import { useContext } from 'react';
const Results = () => {
  const { results } = useContext(SearchResultContext);
  return (
    <>
      {results && (
        <div className={classes.results}>
          {results.map((book) => (
            <CardContainer key={book.key} id={book.key} />
          ))}
        </div>
      )}
    </>
  );
};
export default Results;
