import classes from './MealsSummary.module.css';

const MealsSummary = () => {
return (
    <section className={classes.summary}>
      <h2>Delicious Seafood, Delivered To You</h2>
      <p>
        Choose your favorite fresh caught food from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals have high-quality ingredients, just-in-time and
        are prepared by the best experienced chefs!
      </p>
</section>);
};

export default MealsSummary;