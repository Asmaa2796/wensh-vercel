import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ClientsPartnersWinch = () => {
  const { t, i18n } = useTranslation("global");
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle(t('labels.tripwayPartnerClients'));
  }, [setTitle, t, i18n.language]);
  return (
    <>
      {/* form */}
      <form className="table_form form-style my-3 py-3">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t('labels.tripwayPartners')}</label>
            <input type="text" name="tripway_partners" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t('labels.user')}</label>
            <input type="text" name="tripway_partners" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t('labels.email')}</label>
            <input type="text" name="email" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t('labels.report')}</label>
            <input type="text" name="report" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12 text-center">
            <button className="btn show_result">{t("btns.viewResults")}</button>
            <button className="btn show_all">{t("btns.viewAll")}</button>
          </div>
        </div>
      </form>
      <div className="no_data text-center rounded my-2 p-3" style={{backgroundColor:"#569a8b"}}>
        <h5 className="my-2 text-md text-white">{t('labels.noData')}</h5>
      </div>
      {/* pagination  */}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item disabled">
            <a
              className="page-link"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              <i className="fa fa-caret-right"></i>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">
              2 <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="fa fa-caret-left"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ClientsPartnersWinch;