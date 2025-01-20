import classes from './Image.module.scss';

const Image = ({ link }) => {
  return (
    <>
      {link === 'no image available' && (
        <div className={classes.no__img}>
          <p className={classes.text}>No Image Available</p>
        </div>
      )}
      {link !== 'no image available' && (
        <img className={classes.img} src={link} alt="" />
      )}
    </>
  );
};
export default Image;
