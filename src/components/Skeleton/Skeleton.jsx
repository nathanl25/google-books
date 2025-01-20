import classes from './Skeleton.module.scss';
import CardContainer from '../../containers/CardContainer/CardContainer';
const Skeleton = () => {
  const arr = [];
  for (let i = 0; i < 12; i++) {
    arr[i] = <CardContainer key={i} id={i} variant="skeleton" />;
  }
  return <div className={classes.container}>{arr}</div>;
};

export default Skeleton;
