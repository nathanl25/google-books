import classes from './Caption.module.scss';
import FullDetailsModal from '../FullDetailsModal/FullDetailsModal';
import { useState } from 'react';
const Caption = ({ bookInfo }) => {
  const [visible, setVisible] = useState(false);

  const toggleVis = () => {
    setVisible(true);
  };

  return (
    <div className={classes.caption}>
      <h2 className={classes.title}>{bookInfo.title}</h2>
      <h3 className={classes.authors}>
        {bookInfo.authors === undefined
          ? 'No Author Available'
          : bookInfo.authors.join(', ')}
      </h3>
      <p className={classes.subtitle}>{bookInfo.subtitle}</p>
      <button onClick={toggleVis}>Show More...</button>
      <FullDetailsModal
        visibility={visible}
        setVisibility={setVisible}
        bookInfo={bookInfo}
      />
    </div>
  );
};
export default Caption;
