import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Register = () => {
  const { t, i18n } = useTranslation("global");
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle(t("sign.register"));
  }, [setTitle, t, i18n.language]);

  return (
    <>
      {/* form */}
        <div className="container">
            <form className="table_form form-style my-3 py-3">
                <div className="form-div">
                    <div className="text-center my-3">
                        <Link to="/"><img src="/img/fav.png" alt="tripway" style={{width:"auto",maxHeight:"60px"}} /></Link>
                    </div>
                    <h5>{t('sign.createAccount')}</h5>
                    <label>{t('sign.name')}</label>
                    <input type="text" name="name" placeholder={t('sign.name')} />
                    <label>{t('sign.email')}</label>
                    <input type="email" name="email" placeholder={t('sign.email')}/>
                    <label>{t('sign.password')}</label>
                    <input type="password" name="password" placeholder={t('sign.password')} />
                   
                    <button type="submit" className="d-block w-100">{t('sign.register')}</button>
                    <div className="text-center">
                        <b className="text-sm">{t('sign.haveAccount')} <Link to="/login" className="text-color mx-1"> {t('sign.login')}</Link></b>
                    </div>
                </div>
            </form>
        </div>
    </>
  );
};

export default Register;
