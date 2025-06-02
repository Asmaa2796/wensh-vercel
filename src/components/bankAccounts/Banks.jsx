import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import { useTranslation } from 'react-i18next';
const Banks = () => {
  const {t,i18n} = useTranslation('global');
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle(t('sidenav.banks'));
  }, [setTitle, t, i18n.language]);
  return (
    <>
      {/* form */}
      <form className="table_form form-style my-3 py-3">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t('labels.bankName')} </label>
             <input type="text" name="bank_name" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t('labels.report')} </label>
             <input type="text" name="report" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12 text-center">
            <button className="btn show_result">{t('btns.viewResults')} </button>
            <button className="btn show_all">{t('btns.viewAll')}</button>
          </div>
        </div>
      </form>
      <div className="table_wrapper">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="text-lighter">
                  #
                </th>
                <th scope="col" className="text-lighter">
                  {t('labels.bankName')} 
                </th>
                <th scope="col" className="text-lighter">
                  {t('labels.accountName')} 
                </th>
                <th scope="col" className="text-lighter">
                  {t('labels.bankCode')} 
                </th>
                <th scope="col" className="text-lighter">
                  {t('labels.usage')} 
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="sub-text">12</td>
                <td className="sub-text">مصرف الراجحي</td>
                <td className="text-color">شركة X للخدمات اللوجستية</td>
                <td className="sub-text">80</td>
                <td className="sub-text">{t('labels.withdrawalAndDeposit')}</td>
              </tr>
              <tr>
                <td className="sub-text">12</td>
                <td className="sub-text">مصرف الراجحي</td>
                <td className="text-color">شركة X للخدمات اللوجستية</td>
                <td className="sub-text">80</td>
                <td className="sub-text">{t('labels.withdrawalAndDeposit')}</td>
              </tr>
              <tr>
                <td className="sub-text">12</td>
                <td className="sub-text">مصرف الراجحي</td>
                <td className="text-color">شركة X للخدمات اللوجستية</td>
                <td className="sub-text">80</td>
                <td className="sub-text">{t('labels.withdrawalAndDeposit')}</td>
              </tr>
              <tr>
                <td className="sub-text">12</td>
                <td className="sub-text">مصرف الراجحي</td>
                <td className="text-color">شركة X للخدمات اللوجستية</td>
                <td className="sub-text">80</td>
                <td className="sub-text">{t('labels.withdrawalAndDeposit')}</td>
              </tr>
              <tr>
                <td className="sub-text">12</td>
                <td className="sub-text">مصرف الراجحي</td>
                <td className="text-color">شركة X للخدمات اللوجستية</td>
                <td className="sub-text">80</td>
                <td className="sub-text">{t('labels.withdrawalAndDeposit')}</td>
              </tr>
            </tbody>
          </table>
        </div>
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

export default Banks;