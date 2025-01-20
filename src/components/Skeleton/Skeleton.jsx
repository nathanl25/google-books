import classes from './Skeleton.module.scss';
const Skeleton = () => {
  const arr = [];
  for (let i = 0; i < 12; i++) {
    arr[i] = <div key={i} id={i} className={classes.skeleton}></div>;
  }
  return <div className={classes.container}>{arr}</div>;
};

export default Skeleton;
