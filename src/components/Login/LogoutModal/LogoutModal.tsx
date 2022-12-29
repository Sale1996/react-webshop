import { useState, useContext } from "react";
import { AccountContext } from "context/account/AccountContext";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const LogoutModal = () => {
  const { logout } = useContext(AccountContext);
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  const logoutHandler = () => {
    logout();
    setShow(false);
  };

  return (
    <>
      <div onClick={() => setShow(true)}>
        {t("logOutMenuEntry", { ns: "login" })}
      </div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{t("logOutModalQuestion", { ns: "login" })}</h4>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            onClick={() => logoutHandler()}
            className="btn btn-primary"
          >
            {t("logOutModalYesButton", { ns: "login" })}
          </button>
          <button
            type="button"
            onClick={() => setShow(false)}
            className="btn btn-primary"
          >
            {t("logOutModalNoButton", { ns: "login" })}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LogoutModal;
