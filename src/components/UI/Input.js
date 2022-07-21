import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      {console.log(props.title)}
      <label htmlFor={props.input.id}>{props.title}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});
export default Input;
