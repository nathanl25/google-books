import classes from './About.module.scss';
import Description from '../Description/Description';
const About = () => {
  return (
    <>
      <section>
        <h4>ISBN</h4>
        <h4>Page Count</h4>
        <h4>Publish Date</h4>
        <h4>Publisher</h4>
        <h4>Language</h4>
        <h4>Author</h4>
      </section>
      <section className={classes.description__wrapper}>
        <Description />
      </section>
    </>
  );
};
export default About;
