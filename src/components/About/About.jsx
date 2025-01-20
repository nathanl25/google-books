import classes from './About.module.scss';
import Description from '../Description/Description';
import Field from '../Field/Field';
const About = ({ bookInfo }) => {
  const isbn = bookInfo.identifiers.join(', ');
  const categories = bookInfo.categories.join(', ');
  return (
    <>
      <section className={classes.field}>
        <Field field="ISBN" value={isbn} />
        <Field field="Publish Date" value={bookInfo.date} />
        <Field field="Categories" value={categories} />
        <Field field="Publisher" value={bookInfo.publisher} />
      </section>
      <Description description={bookInfo.description} variant=".full_details" />
    </>
  );
};
export default About;
