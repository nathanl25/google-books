import classes from './Pagination.module.scss';
import { useContext } from 'react';
import { SearchResultContext } from '../../context/SearchResultContextProvider';
import { paginate } from './paginateDisplay';
import PageNumber from '../PageNumber/PageNumber';
const Pagination = ({ searchValue }) => {
  const { currPage, totalPages } = useContext(SearchResultContext);
  const display = paginate(Number(totalPages), Number(currPage));
  return (
    <div className={classes.pagination}>
      <div className={classes.wrapper}>
        {display.map((value, index) => {
          return (
            <PageNumber
              key={value + index}
              value={value}
              searchValue={searchValue}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Pagination;
