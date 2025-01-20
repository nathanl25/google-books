import classes from './Header.module.scss';
const Header = () => {
  return (
    <div className={classes.wrapper}>
      <h2>Google Books Search</h2>
      <p className={classes.explanation}>
        Type in a search term and hit submit to find some books. Uses the Google
        Books API.
        <br />
      </p>
    </div>
  );
};
export default Header;
