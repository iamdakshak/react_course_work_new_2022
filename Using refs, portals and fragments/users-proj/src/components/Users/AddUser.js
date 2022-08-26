import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef(); //useRef Hook implementation
  const ageInputRef = useRef(); //useRef Hook implementation

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("Name input ref val : ", nameInputRef.current.value);
    console.log("Age input ref : ", ageInputRef);
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    /* Block uses useState to do state update and/or manipulation*/
    // if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
    //   setError({
    //     title: "Invalid input",
    //     message: "Please enter a valid name and age (non-empty values).",
    //   });
    //   return;
    // }
    // if (+enteredAge < 1) {
    //   setError({
    //     title: "Invalid age",
    //     message: "Please enter a valid age (> 0).",
    //   });
    //   return;
    // }
    // props.onAddUser(enteredUsername, enteredAge);
    // setEnteredUsername("");
    // setEnteredAge("");

    /* useState code snippet */

    /* ----THIS IS useRef hook IMPLEMENTATION FOR STATE UPDATION ---- */

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    //Updated useRef variables/constants that we declared inside this block.
    //Also we don't need useState hook vars/const anymore

    nameInputRef.current.value = "";
    ageInputRef.current.value = ""; //We have declared this 2 statements so that we clear the input field text entered after Adding user

    /* ----HERE useRef CODEBLOCK EXAMPLE ENDS */
  };

  /* _____THIS IS FOR USESTATE() IMPLEMENTATION_______ */

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  //NOTE : Using useRef() can save lot of state management code but it's uncontrolled component usage nature-wise.
  //If you just need to use dat from user and aren't considered about React helping in using/modifying for other uses then use this else stick to useState()

  /* _____ USESTATE() HOOK IMPLEMENTATION ENDS _____ */

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}           /* Below 2 lines not needed if using useRef hook implementation */
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}               /* Below 2 lines not needed if using useRef hook implementation */
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
