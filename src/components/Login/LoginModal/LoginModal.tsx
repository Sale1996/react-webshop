import { useState, useContext } from "react";
import useUserCredentials from "hooks/useUserCredentials";
import { AccountContext } from "context/account/AccountContext";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const LoginModal = () => {
  const [userCredentials, setUserName, setUserPassword] = useUserCredentials();
  const { login } = useContext(AccountContext);
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  const loginHandler = () => {
    login(userCredentials);
    setShow(false);
  };

  return (
    <>
      <div onClick={() => setShow(true)}>
        {t("loginMenuEntry", { ns: "login" })}
      </div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{t("loginModalTitle", { ns: "login" })}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="m-3" onSubmit={loginHandler}>
            <div className="mb-3">
              <label className="form-label" htmlFor="userName">
                {t("usernameFormTitle", { ns: "login" })}
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
                value={userCredentials?.username}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="userPassword">
                {t("passwordFormTitle", { ns: "login" })}
              </label>
              <input
                type="password"
                className="form-control"
                id="userPassword"
                onChange={(event) => {
                  setUserPassword(event.target.value);
                }}
                value={userCredentials?.password}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberUser"
              />
              <label className="form-check-label" htmlFor="rememberUser">
                {t("rememberMeCheckTitle", { ns: "login" })}
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            onClick={() => loginHandler()}
            className="btn btn-primary"
          >
            {t("submitButton", { ns: "login" })}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
