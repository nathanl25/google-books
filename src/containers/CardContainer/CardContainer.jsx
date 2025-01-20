import classes from './CardContainer.module.scss';
import Caption from '../../components/Caption/Caption';
import Reversible from '../../components/Reversible/Reversible';
import { SearchResultContext } from '../../context/SearchResultContextProvider';
import { useContext } from 'react';
const CardContainer = ({ id }) => {
  const { results } = useContext(SearchResultContext);
  const bookInfo = results.find((book) => {
    if (id === book.key) {
      return true;
    }
  });
  return (
    <>
      <div className={classes.card}>
        <Reversible bookInfo={bookInfo} />
        <Caption bookInfo={bookInfo} />
      </div>
    </>
  );
};
export default CardContainer;
