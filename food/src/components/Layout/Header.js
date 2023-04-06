import { Fragment } from 'react';

import sushi from '../../assets/sushi.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meal App</h1>
        <HeaderCartButton />
      </header>
         <div className={classes['main-image']}>
        <img src={sushi} alt='A table full of delicious seafood sushi'/>
      </div>
    </Fragment>
  );
};


export default Header;