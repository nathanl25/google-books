import classes from './Description.module.scss';
const Description = ({ description, variant }) => {
  if (variant === 'reversible') {
    return (
      <div className={`${classes.description} ${classes.reversible}`}>
        <p className={classes.wrapper}>{description}</p>
      </div>
    );
  }
  return (
    <div className={`${classes.description} ${classes.full__details}`}>
      <p>{description}</p>
    </div>
  );
};
export default Description;
