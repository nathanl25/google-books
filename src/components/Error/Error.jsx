import classes from './Error.module.scss';
import { useContext } from 'react';
import { SearchResultContext } from '../../context/SearchResultContextProvider';
const Error = () => {
  const { searchError } = useContext(SearchResultContext);
  return (
    <section className={classes.container}>
      <h2>Uh oh!</h2>
      <h3>
        Something went wrong. It could have been caused by one of the following:
      </h3>
      <ul>
        <li>Your search term was not a valid one</li>
        <li>Your search term returned no results</li>
        <li>The api key used is invalid</li>
        <li>You went out of bounds with the pages</li>
        <li>You have reached the daily limit for searches</li>
      </ul>
      <h3>Error Type:</h3>
      <p>{searchError.message}</p>
    </section>
  );
};
export default Error;
