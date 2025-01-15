import classes from './Reversible.module.scss';
import Image from '../Image/Image';
import Description from '../Description/Description';
const Reversible = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.front}>
        <Image />
      </div>
      <div className={classes.back}>
        <Description />
      </div>
    </div>
  );
};
export default Reversible;
