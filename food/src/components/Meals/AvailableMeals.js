import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';


const seafood = [
    {
      id: 'm1',
      name: 'Edamame',
      description: 'Finest green veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Salmon Sushi',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Rock Fried Calamari',
      description: 'American, crispy, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Cucumber Salad',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];


const AvailableMeals = () => {
return (
    <section className={classes.meals}>
      <Card>
        <ul>
            {seafood.map((c)=> <MealItem 
            key={c.id} 
            id={c.id}
            name={c.name} 
            description={c.description} 
            price={c.price}/>)}
        </ul>
        </Card>
    </section>
)
};


export default AvailableMeals;