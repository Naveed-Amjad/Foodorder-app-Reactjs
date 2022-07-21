import React from "react";
import AvailabeMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailabeMeals />
    </React.Fragment>
  );
};
export default Meals;
