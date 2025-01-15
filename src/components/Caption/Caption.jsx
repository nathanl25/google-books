import classes from './Caption.module.scss';
import FullDetailsModal from '../FullDetailsModal/FullDetailsModal';
import { useState } from 'react';
import { useRef } from 'react';
const Caption = () => {
  const [visible, setVisible] = useState(false);
  const closeButton = () => {
    setVisible(false);
  };
  const captionRef = useRef(null);

  const toggleVis = () => {
    // console.log(JSON.stringify(captionRef));
    // console.log(captionRef);
    // // setVisible(true);
    // console.log(captionRef.current.children[3].open);
    // captionRef.current.children[3].open = true;
    setVisible(true);
  };
  return (
    <div ref={captionRef}>
      <h2>Title</h2>
      <h3>Author</h3>
      <button onClick={toggleVis}>Show More...</button>
      <FullDetailsModal visibility={visible} setVisibility={setVisible} />
      {/* {visible && <FullDetailsModal />} */}
    </div>
  );
};
export default Caption;
