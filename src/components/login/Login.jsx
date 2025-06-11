import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Login = () => {
  const { t, i18n } = useTranslation("global");
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle(t("sign.login"));
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
                    <h5>{t('sign.login')}</h5>
                    <label>{t('sign.email')}</label>
                    <input type="email" name="email" placeholder={t('sign.email')}/>
                    <label>{t('sign.password')}</label>
                    <input type="password" name="password" placeholder={t('sign.password')} />
                   <div className="text-center">
                        <button type="button" className="btn text-secondary px-0 py-3 m-0">{t('sign.forgotPassword')}</button>
                    </div>
                    <button type="submit" className="d-block w-100">{t('sign.register')}</button>
                    <div className="text-center">
                        <b className="text-sm">{t('sign.noAccount')} <Link to="/register" className="text-color mx-1"> {t('sign.createAccount')}</Link></b>
                    </div>
                </div>
            </form>
        </div>
    </>
  );
};

export default Login;
