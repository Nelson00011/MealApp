import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';



const AvailableMeals = () => {
  const [seafood, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true)
    const fetchMeals = async () => {
      const response = await fetch('https://food-601aa-default-rtdb.firebaseio.com/meals.json');
      
      if(!response.ok){
        throw new Error("Something went wrong!")
      }
      
      const responseData = await response.json();
      const loadedMeals = [];

    //Fill the loadedMeals array with response
    for (const key in responseData) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
      });
    }

    setMeals(loadedMeals);
    setIsLoading(false);
    };

      fetchMeals().catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  
  }, []);

  //isloading message
if (isLoading){
  return (<section className={classes.MealsLoading}>
    <p>Loading...</p>
  </section>
    )};

//error messages (check firebase settings/rules)
if(error){
  return (<section className={classes.Error}>
    <p>{error}</p>
  </section>
    )};

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