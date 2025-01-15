import classes from './Image.module.scss';

const Image = () => {
  return (
    <img
      className={classes.img}
      src="http://books.google.com/books/content?id=chI0uRYS8wYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      alt=""
    />
  );
};
export default Image;
