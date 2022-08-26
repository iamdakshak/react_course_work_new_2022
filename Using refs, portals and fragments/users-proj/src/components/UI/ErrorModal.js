import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onConfirm} />
);

const ModalOverlay = (props) => {
  const { title, message, onConfirm } = props?.data;
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      /* This is how portals are implemented (also check index.html to check
      where portal opens) */
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay data={props} />,
        document.getElementById("overlay-root")
      )}
      /* Portal implementation ends */
    </>
  );
};

export default ErrorModal;
