import classes from './CardContainer.module.scss';
import Caption from '../../components/Caption/Caption';
import Reversible from '../../components/Reversible/Reversible';
const CardContainer = () => {
  return (
    <div className={classes.card}>
      <Reversible />
      <Caption />
    </div>
  );
};
export default CardContainer;
