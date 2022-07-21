import React from "react";
import mealsImg from "../../assets/meals.jpg";
import classes from "./header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>FoodLove</h1>
        <HeaderCartButton whenClicked={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A food table" />
      </div>
    </React.Fragment>
  );
};

export default Header;
