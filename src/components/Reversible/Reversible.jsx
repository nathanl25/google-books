import classes from './Reversible.module.scss';
import Image from '../Image/Image';
import Description from '../Description/Description';
const Reversible = ({ bookInfo }) => {
  const link = bookInfo.url;
  const description = bookInfo.description;
  return (
    <div className={classes.wrapper}>
      <div className={classes.front}>
        <Image link={link} />
      </div>
      <div className={classes.back}>
        <Description description={description} variant="reversible" />
      </div>
    </div>
  );
};
export default Reversible;
