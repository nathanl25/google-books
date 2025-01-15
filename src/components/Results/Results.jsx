import classes from './Results.module.scss';
import CardContainer from '../../containers/CardContainer/CardContainer';
const Results = ({ data = null }) => {
  return (
    <div className={classes.results}>
      {!data && <CardContainer />}
      {!data && <CardContainer />}
      {!data && <CardContainer />}
      {!data && <CardContainer />}
      {!data && <CardContainer />}
      {!data && <CardContainer />}
      {!data && <CardContainer />}
      {!data && <CardContainer />}
      {!data && <CardContainer />}
      {!data && <CardContainer />}
      {!data && <CardContainer />}
      {!data && <CardContainer />}
    </div>
  );
};
export default Results;
