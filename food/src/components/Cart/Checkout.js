import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim().length === 0;
const isNoteFiveChars = (value) => value.trim().length !== 5; 

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true, 
        postalCode: true,
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalCodeIsValid = !isNoteFiveChars(enteredPostalCode);
        const enteredCityIsValid = !isEmpty(enteredCity);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postalCode: enteredPostalCodeIsValid, 
            city: enteredCityIsValid
        });

        const formIsValid = 
        enteredNameIsValid &&
        enteredStreetIsValid &&
        enteredPostalCodeIsValid &&
        enteredCityIsValid;

           if(!formIsValid){
            return; 
           }
           
           props.onSubmit({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity,
          });
    };

    //Setting Classes for the below Input form
    const nameCtrclasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
    const streetCtrclasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`;
    const postalCtrclasses = `${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`;
    const cityCtrclasses = `${classes.control} ${formInputsValidity.city? '' : classes.invalid}`;

    


    return (
        <form onSubmit={confirmHandler} className={classes.form}>
        <div className={nameCtrclasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef}/>
            {!formInputsValidity.name && <p>Please enter valid name</p>}
        </div>
        <div className={streetCtrclasses}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={streetInputRef}/>
            {!formInputsValidity.street && <p>Please enter valid street</p>}
        </div>
        <div className={postalCtrclasses}>
            <label htmlFor='postal'>Postal Code</label>
            <input type='text' id='postal' ref={postalCodeInputRef}/>
            {!formInputsValidity.postalCode && <p>Please enter valid postal code (5 characters long)</p>}
        </div>
        <div className={cityCtrclasses}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' ref={cityInputRef}/>
            {!formInputsValidity.city && <p>Please enter valid city</p>}
        </div>
        <div className={classes.actions}>
            <button type="botton" onClick={props.onCancel}>Cancel</button>
            <button>Confirm</button>
        </div>
    </form>
    )};

export default Checkout;