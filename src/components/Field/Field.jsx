import classes from './Field.module.scss';

const Field = ({ field, value }) => {
  return (
    <div className={classes.field}>
      <h4>{field}</h4>
      <p className={classes.value}>{value}</p>
    </div>
  );
};

export default Field;
