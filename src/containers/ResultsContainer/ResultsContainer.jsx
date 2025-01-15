import classes from './ResultsContainer.module.scss';
import Pagination from '../../components/Pagination/Pagination';
import Results from '../../components/Results/Results';
const ResultsContainer = () => {
  return (
    <>
      <div className={classes.results__wrapper}>
        <Results />
      </div>
      <Pagination />
    </>
  );
};

export default ResultsContainer;
