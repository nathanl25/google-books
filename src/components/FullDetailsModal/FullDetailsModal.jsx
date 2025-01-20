import classes from './FullDetailsModal.module.scss';
import Image from '../Image/Image';
import About from '../About/About';
import { useRef } from 'react';
const FullDetailsModal = ({ visibility, setVisibility, bookInfo }) => {
  const dialogRef = useRef(null);
  if (visibility === true) {
    dialogRef.current.open = true;
  }
  const closeButton = () => {
    dialogRef.current.open = false;
    setVisibility(false);
  };
  bookInfo.authors ??= [];
  const authors = bookInfo.authors.join(', ');
  return (
    <dialog className={classes.modal} ref={dialogRef}>
      <div className={classes.wrapper}>
        <button onClick={closeButton}>Close</button>
        <section className={classes.top__half}>
          <div className={classes.container}>
            <h2 className={classes.title}>{bookInfo.title}</h2>
            <h3 className={classes.title}>{bookInfo.subtitle}</h3>
            <h4>
              {authors} - {bookInfo.date && bookInfo.date.substring(0, 4)}
            </h4>
          </div>
          <Image link={bookInfo.url} />
        </section>
        <section className={classes.bottom__half}>
          <About bookInfo={bookInfo} />
        </section>
      </div>
    </dialog>
  );
};
export default FullDetailsModal;
