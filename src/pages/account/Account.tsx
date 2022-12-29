import Headline from "components/Headline";
import { AppLayout } from "components/Layouts";
import { AccountContext } from "context/account/AccountContext";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

const Account = () => {
  const { accountState } = useContext(AccountContext);
  const { currentUser } = accountState;
  const { t } = useTranslation();

  console.log(accountState);

  return (
    <AppLayout>
      <Headline title={t("title", { ns: "account" })} />
      <div className="container-fluid my-2 border" style={{ width: "30rem" }}>
        <table className="table">
          <tbody>
            <tr>
              <th>{t("formFirstName", { ns: "userform" })}</th>
              <td>{currentUser?.name.firstname}</td>
            </tr>
            <tr>
              <th>{t("formLastName", { ns: "userform" })}</th>
              <td>{currentUser?.name.lastname}</td>
            </tr>
            <tr>
              <th>{t("formEmail", { ns: "userform" })}</th>
              <td>{currentUser?.email}</td>
            </tr>
            <tr>
              <th>{t("formPhone", { ns: "userform" })}</th>
              <td>{currentUser?.phone}</td>
            </tr>
            <tr>
              <th>{t("formCity", { ns: "userform" })}</th>
              <td>{currentUser?.address.city}</td>
            </tr>
            <tr>
              <th>{t("formStreet", { ns: "userform" })}</th>
              <td>{currentUser?.address.street}</td>
            </tr>
            <tr>
              <th>{t("formStreetNumber", { ns: "userform" })}</th>
              <td>{currentUser?.address.number}</td>
            </tr>
            <tr>
              <th>{t("formZipCode", { ns: "userform" })}</th>
              <td>{currentUser?.address.zipcode}</td>
            </tr>
          </tbody>
        </table>
        <div className="mb-2">
          <button className="btn btn-primary">
            {t("changeUserInfoBtn", { ns: "account" })}
          </button>
          <button className="btn btn-primary ms-3">
            {t("changePassBtn", { ns: "account" })}
          </button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Account;
