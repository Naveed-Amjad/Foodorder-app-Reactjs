// import classses from "./Checkout.module.css";

// const Checkout = (props) => {
//   const confirmHandler = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <form onSubmit={confirmHandler}>
//       <div className={classses.control}>
//         <label htmlFor="name">Your Name</label>
//         <input type="text" id="name" />
//       </div>
//       <div className={classses.control}>
//         <label htmlFor="street">Street</label>
//         <input type="text" id="street" />
//       </div>
//       <div className={classses.control}>
//         <label htmlFor="postal">Postal Code</label>
//         <input type="text" id="postal" />
//       </div>
//       <div className={classses.control}>
//         <label htmlFor="city">City</label>
//         <input type="text" id="city" />
//       </div>
//       <button type="button" onClick={props.onCancel}>
//         Cancel
//       </button>
//       <button>Confirm</button>
//     </form>
//   );
// };
// export default Checkout;
import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";

const isFiveChar = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsvalid = !isEmpty(enteredStreet);
    const enteredCityIsvalid = !isEmpty(enteredCity);
    const enteredPostalIsvalid = isFiveChar(enteredPostal);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsvalid,
      city: enteredCityIsvalid,
      postalCode: enteredPostalIsvalid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsvalid &&
      enteredCityIsvalid &&
      enteredPostalIsvalid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostal,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please entered a valid name!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please entered a valid street!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputValidity.postalCode && (
          <p>Please entered a valid postal code (5 digits long)</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please entered a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
