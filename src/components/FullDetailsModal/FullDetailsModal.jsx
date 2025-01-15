import classes from './FullDetailsModal.module.scss';
import Image from '../Image/Image';
import About from '../About/About';
import { useRef } from 'react';
const FullDetailsModal = ({ visibility, setVisibility }) => {
  const dialogRef = useRef(null);
  if (visibility === true) {
    console.log(dialogRef);
    dialogRef.current.open = true;
  }
  const closeButton = () => {
    dialogRef.current.open = false;
    setVisibility(false);
  };
  return (
    <dialog className={classes.modal} ref={dialogRef}>
      <div className={classes.wrapper}>
        <button onClick={closeButton}>Close</button>
        <section className={classes.top__half}>
          <div>
            <h2 className={classes.title}>Flour Water Salt Yeast</h2>
            <h3 className={classes.title}>
              The Fundamentals of Artisan Bread and Pizza [A Cookbook]
            </h3>
            <h4>By Ken Forkish - 2012</h4>
          </div>
          <Image />
        </section>
        <section>
          <About />
        </section>
      </div>
    </dialog>
  );
};
export default FullDetailsModal;
