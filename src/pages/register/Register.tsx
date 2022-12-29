import Headline from "components/Headline";
import { AppLayout } from "components/Layouts";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();

  return (
    <AppLayout>
      <Headline title={t("title", { ns: "register" })} />

      <div className="container-fluid my-2 border" style={{ width: "35rem" }}>
        <form className="m-3">
          <div className="row mb-2">
            <label className="col-sm-4 col-form-label">
              {t("formLastName", { ns: "userform" })}
            </label>
            <div className="col-sm-8">
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="row mb-2">
            <label className="col-sm-4 col-form-label">
              {t("formPassword", { ns: "userform" })}
            </label>
            <div className="col-sm-8">
              <input className="form-control" type="password" />
            </div>
          </div>

          <div className="row mb-2">
            <label className="col-sm-4 col-form-label">
              {t("formConfirmPassword", { ns: "userform" })}
            </label>
            <div className="col-sm-8">
              <input className="form-control" type="password" />
            </div>
          </div>

          <div className="row mb-2">
            <label className="col-sm-4 col-form-label">
              {t("formFirstName", { ns: "userform" })}
            </label>
            <div className="col-sm-8">
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="row mb-2">
            <label className="col-sm-4 col-form-label">
              {t("formLastName", { ns: "userform" })}
            </label>
            <div className="col-sm-8">
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="row mb-2">
            <label className="col-sm-4 col-form-label">
              {t("formEmail", { ns: "userform" })}
            </label>
            <div className="col-sm-8">
              <input className="form-control" type="email" />
            </div>
          </div>

          <div className="row mb-2">
            <label className="col-sm-4 col-form-label">
              {t("formPhone", { ns: "userform" })}
            </label>
            <div className="col-sm-8">
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="row mb-2">
            <label className="col-sm-4 col-form-label">
              {t("formCity", { ns: "userform" })}
            </label>
            <div className="col-sm-8">
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="row mb-2">
            <label className="col-sm-4 col-form-label">
              {t("formStreet", { ns: "userform" })}
            </label>
            <div className="col-sm-8">
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="row mb-2">
            <label className="col-sm-4 col-form-label">
              {t("formStreetNumber", { ns: "userform" })}
            </label>
            <div className="col-sm-8">
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="row mb-2">
            <label className="col-sm-4 col-form-label">
              {t("formZipCode", { ns: "userform" })}
            </label>
            <div className="col-sm-8">
              <input className="form-control" type="text" />
            </div>
          </div>

          <button className="btn btn-primary">
            {t("submitButton", { ns: "register" })}
          </button>
        </form>
      </div>
    </AppLayout>
  );
};

export default Register;
