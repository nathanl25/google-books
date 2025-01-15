import classes from './SearchBar.module.scss';
const SearchBar = () => {
  const searchTerm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={searchTerm}>
        <input type="text" />
        <button>Submit</button>
      </form>
    </>
  );
};
export default SearchBar;
