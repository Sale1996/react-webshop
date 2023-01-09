import { AccountContext } from "context/account/AccountContext";
import { FormEvent, useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ValidationFeedback from "../ValidationFeedback";
import { useNavigate } from "react-router-dom";
import { CartContext } from "context/cart/CartContext";
import { t } from "i18next";
import { toast } from "react-toastify";

const CheckoutForm = () => {
  const [validated, setValidated] = useState(false);
  const { accountState } = useContext(AccountContext);
  const navigate = useNavigate();
  const { removeAll } = useContext(CartContext);

  let userInfo = <p>{t("checkoutTitleNoLogged", { ns: "checkout" })}</p>;
  if (accountState.isLoggedIn) {
    userInfo = <p>{t("checkoutTitleLogged", { ns: "checkout" })}</p>;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form: HTMLFormElement = event.currentTarget;
    
    setValidated(true);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {      
      removeAll();
      toast.success(t("checkoutSuccess", { ns: "checkout" }), {
         autoClose: 10000,
      });
  
      navigate("/");
    }    
  };

  return (
    <div className="m-3">
      {userInfo}

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-2">
          <Form.Label column sm="auto" style={{ width: "10rem" }}>
            {t("formFirstName", { ns: "userform" })}
          </Form.Label>
          <Col className="d-flex flex-row">
            <Form.Control
              type="text"
              required
              minLength={3}
              maxLength={20}
              style={{ width: "15rem" }}
              defaultValue={accountState.currentUser?.name.firstname}
            />
            <ValidationFeedback>
              {t("firstNameValidation", { ns: "userform" })}
            </ValidationFeedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-2">
          <Form.Label column sm="auto" style={{ width: "10rem" }}>
            {t("formLastName", { ns: "userform" })}
          </Form.Label>
          <Col className="d-flex flex-row">
            <Form.Control
              type="text"
              required
              minLength={3}
              maxLength={20}
              style={{ width: "15rem" }}
              defaultValue={accountState.currentUser?.name.lastname}
            />
            <ValidationFeedback>
              {t("lastNameValidation", { ns: "userform" })}
            </ValidationFeedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-2">
          <Form.Label column sm="auto" style={{ width: "10rem" }}>
            {t("formStreet", { ns: "userform" })}
          </Form.Label>
          <Col className="d-flex flex-row">
            <Form.Control
              type="text"
              required
              minLength={3}
              maxLength={30}
              style={{ width: "15rem" }}
              defaultValue={
                accountState.isLoggedIn
                  ? accountState.currentUser?.address?.street +
                    " " +
                    accountState.currentUser?.address?.number.toString()
                  : ""
              }
            />
            <ValidationFeedback>
              {t("streetAddressValidaiton", { ns: "userform" })}
            </ValidationFeedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-2">
          <Form.Label column sm="auto" style={{ width: "10rem" }}>
            {t("formCity", { ns: "userform" })}
          </Form.Label>
          <Col className="d-flex flex-row">
            <Form.Control
              type="text"
              required
              minLength={3}
              maxLength={20}
              style={{ width: "15rem" }}
              defaultValue={accountState.currentUser?.address.city}
            />
            <ValidationFeedback>
              {t("cityValidation", { ns: "userform" })}
            </ValidationFeedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-2">
          <Form.Label column sm="auto" style={{ width: "10rem" }}>
            {t("formZipCode", { ns: "userform" })}
          </Form.Label>
          <Col className="d-flex flex-row">
            <Form.Control
              type="text"
              required
              pattern="\d{5}"
              style={{ width: "15rem" }}
              defaultValue={accountState.currentUser?.address.zipcode}
            />
            <ValidationFeedback>
              {t("zipCodeValidation", { ns: "userform" })}
            </ValidationFeedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-2">
          <Form.Label column sm="auto" style={{ width: "10rem" }}>
            {t("formPhone", { ns: "userform" })}
          </Form.Label>
          <Col className="d-flex flex-row">
            <Form.Control
              type="tel"
              required
              pattern="\d{5,30}"
              style={{ width: "15rem" }}
              defaultValue={accountState.currentUser?.phone}
            />
            <ValidationFeedback>
              {t("phoneNumberValidation", { ns: "userform" })}
            </ValidationFeedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-2">
          <Form.Label column sm="auto" style={{ width: "10rem" }}>
            {t("formEmail", { ns: "userform" })}
          </Form.Label>
          <Col className="d-flex flex-row">
            <Form.Control
              type="email"
              required
              minLength={5}
              maxLength={30}
              style={{ width: "15rem" }}
              defaultValue={accountState.currentUser?.email}
            />
            <ValidationFeedback>
              {t("emailValidation", { ns: "userform" })}
            </ValidationFeedback>
          </Col>
        </Form.Group>

        <Button type="submit" variant="dark">
          {t("checkoutBtn", { ns: "checkout" })}
        </Button>
      </Form>
    </div>
  );
};

export default CheckoutForm;
