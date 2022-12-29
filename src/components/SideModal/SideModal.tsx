import { useEffect } from "react";
import { CloseButton } from "react-bootstrap";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./SideModal.css";

const SideModal = (props: any) => {
  const closeOnEscapeKeyDown = (e: any) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="side-modal" onClick={props.onClose}>
        <div
          className="side-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="side-modal-header">
            <CloseButton
              className="side-modal-close-button"
              onClick={props.onClose}
            />
          </div>
          <div className="side-modal-header">
            <h4 className="side-modal-title">{props.title}</h4>
          </div>
          <div className="side-modal-body">{props.children}</div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")!
  );
};

export default SideModal;
