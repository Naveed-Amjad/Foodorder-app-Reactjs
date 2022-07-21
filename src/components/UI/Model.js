// import classes from "./Model.module.css";
// import React, { Fragment } from "react";
// import ReactDOM from "react-dom";

// const Backdrop = (props) => {
//   return <div className={classes.backdrop}></div>;
// };

// const ModelOverlay = (props) => {
//   return (
//     <div className={classes.model}>
//       <div className={classes.content}>{props.children}</div>
//     </div>
//   );
// };
// const portalElement = document.getElementById("overlays");
// const Model = (props) => {
//   return (
//     <Fragment>
//       {ReactDOM.createPortal(<Backdrop />, portalElement)}
//       {ReactDOM.createPortal(
//         <ModelOverlay>{props.children}</ModelOverlay>,
//         portalElement
//       )}
//     </Fragment>
//   );
// };
// export default Model;
import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Model.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.whenCloseClicked} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop whenCloseClicked={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
