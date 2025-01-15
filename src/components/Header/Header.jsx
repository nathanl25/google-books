import classes from './Header.module.scss';
const Header = ({}) => {
  return (
    <>
      <h2>Google Books Search</h2>
      <p className={classes.explanation}>
        Type in a search term and hit submit to find some books. Uses the Google
        Books API.
        <br />
      </p>
    </>
  );
};
export default Header;
