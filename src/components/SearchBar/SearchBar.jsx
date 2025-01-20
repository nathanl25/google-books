import { useRef } from 'react';
import classes from './SearchBar.module.scss';
const SearchBar = ({ setSearchValue }) => {
  const formRef = useRef(null);
  const searchTerm = (e) => {
    e.preventDefault();
    const submission = formRef.current;
    const formData = new FormData(submission);
    const formValues = Object.fromEntries(formData.entries());
    const input = formValues.searchValue;
    if (input === '') {
      return;
    }
    setSearchValue(input);
  };
  return (
    <>
      <form
        className={classes.search__wrapper}
        onSubmit={searchTerm}
        ref={formRef}
      >
        <input className={classes.text__input} type="text" name="searchValue" />
        <button>Search</button>
      </form>
    </>
  );
};
export default SearchBar;
