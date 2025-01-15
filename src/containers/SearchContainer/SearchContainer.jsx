import classes from './SearchContainer.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
const SearchContainer = () => {
  return (
    <section>
      <SearchBar />
      <ResultsContainer />
    </section>
  );
};
export default SearchContainer;
