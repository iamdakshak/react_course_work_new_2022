import React, { useImperativeHandle, useRef } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  //Wrapping the functional component with React.forwardREf since we have to forward from functional component to the HTML DOM
  const inputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      focus: activate, //the focus -> activate method can be used in the Functional component to be passed here.
    };
  });
  /*useImperativeHandle hook is used to bind and forwardRef to the child Component,
  i.e, from Functional component to the HTML DOM structure.
  We can't add ref to Functional components*/

  const activate = () => {
    inputRef?.current?.focus();
  };
  return (
    <div
      className={`${classes.control} ${
        props?.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props?.id}>{props?.label}</label>
      <input
        ref={inputRef}
        type={props?.type}
        id={props?.id}
        value={props?.value}
        onChange={props?.onChange}
        onBlur={props?.onBlur}
      />
    </div>
  );
});

export default Input;
