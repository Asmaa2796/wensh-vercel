import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const BusinessSector = () => {
  const {t,i18n} = useTranslation('global');
  const { setTitle } = useTitle();

  useEffect(() => {
        setTitle(t('sidenav.businessList'));
  }, [setTitle ,t, i18n.language]);
  return (
    <>
      {/* form */}
      <form className="table_form form-style my-3 py-3">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t('labels.name')}</label>
            <input type="text" name="name" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t('labels.branches')}</label>
            <select name="branches">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t('labels.rating')}</label>
            <select name="rate">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">
              {t('labels.unifiedNumberOrCR')}
            </label>
            <input name="commercial_number" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t('labels.status')}</label>
            <select name="status">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t('labels.accountManager')}</label>
            <input name="account_manager" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t('labels.operationsSupervisor')}</label>
            <input name="operation_supervisor" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light"> {t('labels.receivingOfficer')}</label>
            <input name="receiving_official" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light"> {t('labels.clientType')}</label>
            <select name="client_type">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t('labels.entityType')}</label>
            <select name="build_type">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t('labels.activities')}</label>
            <select name="activities">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light"> {t('labels.report')}</label>
            <input type="text" name="report" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 text-center">
            <button className="btn show_result">{t('btns.viewResults')}</button>
            <button className="btn show_all">{t('btns.viewAll')}</button>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 text-center">
            <Link to="add">
              <span
                className="btn btn-warning btn-sm text-sm px-3"
                style={{ marginTop: "45px" }}
              >
                {t('btns.add')}
              </span>
            </Link>
            <button
              type="button"
              className="btn btn-success btn-sm text-sm px-3"
              style={{
                background: "var(--green-color)",
                marginRight: "5px",
                marginTop: "45px",
                fontSize: "14px",
              }}
              data-bs-toggle="modal"
              data-bs-target="#export"
            >
              {t('btns.export')}
            </button>
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
                  {t('labels.clientID')}
                </th>
                <th scope="col" className="text-lighter">
                  {t('labels.name')}
                </th>
                <th scope="col" className="text-lighter">
                  {t('labels.currentBalance')}
                </th>
                <th scope="col" className="text-lighter">
                  {t('labels.rating')}
                </th>
                <th scope="col" className="text-lighter">
                  {t('labels.status')}
                </th>
                <th className="text-lighter">{t('labels.accountManager')} </th>
                <th className="text-lighter">{t('labels.operationsSupervisor')} </th>
                <th className="text-lighter">{t('labels.receivingOfficer')}</th>
                <th className="text-lighter">{t('labels.orders')} </th>
                <th className="text-lighter">{t('labels.sendDate')} </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">10001667</td>
                <td className="text-color">احمد عابدين</td>
                <td className="sub-text">$ 0</td>
                <td>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </td>
                <td style={{ color: "#7ba946" }}>{t('labels.active')}</td>
                <td className="text-color">احمد عابدين</td>
                <td className="text-color">احمد عابدين</td>
                <td className="text-color">احمد عابدين</td>
                <td className="text-color">الطلبات (26)</td>
                <td className="sub-text" style={{ direction: "ltr" }}>
                  21/05/2025 02:52 PM
                </td>
                <td className="d-flex justify-content-center">
                  <Link to="">
                    <span className="text-lighter px-1 mx-1 mb-0">
                      <i className="bi bi-eye"></i>
                    </span>
                  </Link>
                  <Link to="">
                    <span className="text-color px-1 mx-1 mb-0">
                      <i className="bi bi-pen"></i>
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">10001667</td>
                <td className="text-color">احمد عابدين</td>
                <td className="sub-text">$ 0</td>
                <td>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </td>
                <td style={{ color: "#7ba946" }}>{t('labels.active')}</td>
                <td className="text-color">احمد عابدين</td>
                <td className="text-color">احمد عابدين</td>
                <td className="text-color">احمد عابدين</td>
                <td className="text-color">الطلبات (26)</td>
                <td className="sub-text" style={{ direction: "ltr" }}>
                  21/05/2025 02:52 PM
                </td>
                <td className="d-flex justify-content-center">
                  <Link to="">
                    <span className="text-lighter px-1 mx-1 mb-0">
                      <i className="bi bi-eye"></i>
                    </span>
                  </Link>
                  <Link to="">
                    <span className="text-color px-1 mx-1 mb-0">
                      <i className="bi bi-pen"></i>
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">10001667</td>
                <td className="text-color">احمد عابدين</td>
                <td className="sub-text">$ 0</td>
                <td>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </td>
                <td style={{ color: "#7ba946" }}>{t('labels.active')}</td>
                <td className="text-color">احمد عابدين</td>
                <td className="text-color">احمد عابدين</td>
                <td className="text-color">احمد عابدين</td>
                <td className="text-color">الطلبات (26)</td>
                <td className="sub-text" style={{ direction: "ltr" }}>
                  21/05/2025 02:52 PM
                </td>
                <td className="d-flex justify-content-center">
                  <Link to="">
                    <span className="text-lighter px-1 mx-1 mb-0">
                      <i className="bi bi-eye"></i>
                    </span>
                  </Link>
                  <Link to="">
                    <span className="text-color px-1 mx-1 mb-0">
                      <i className="bi bi-pen"></i>
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">10001667</td>
                <td className="text-color">احمد عابدين</td>
                <td className="sub-text">$ 0</td>
                <td>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </td>
                <td style={{ color: "#7ba946" }}>{t('labels.active')}</td>
                <td className="text-color">احمد عابدين</td>
                <td className="text-color">احمد عابدين</td>
                <td className="text-color">احمد عابدين</td>
                <td className="text-color">الطلبات (26)</td>
                <td className="sub-text" style={{ direction: "ltr" }}>
                  21/05/2025 02:52 PM
                </td>
                <td className="d-flex justify-content-center">
                  <Link to="">
                    <span className="text-lighter px-1 mx-1 mb-0">
                      <i className="bi bi-eye"></i>
                    </span>
                  </Link>
                  <Link to="">
                    <span className="text-color px-1 mx-1 mb-0">
                      <i className="bi bi-pen"></i>
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">10001667</td>
                <td className="text-color">احمد عابدين</td>
                <td className="sub-text">$ 0</td>
                <td>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </td>
                <td style={{ color: "#7ba946" }}>{t('labels.active')}</td>
                <td className="text-color">احمد عابدين</td>
                <td className="text-color">احمد عابدين</td>
                <td className="text-color">احمد عابدين</td>
                <td className="text-color">الطلبات (26)</td>
                <td className="sub-text" style={{ direction: "ltr" }}>
                  21/05/2025 02:52 PM
                </td>
                <td className="d-flex justify-content-center">
                  <Link to="">
                    <span className="text-lighter px-1 mx-1 mb-0">
                      <i className="bi bi-eye"></i>
                    </span>
                  </Link>
                  <Link to="">
                    <span className="text-color px-1 mx-1 mb-0">
                      <i className="bi bi-pen"></i>
                    </span>
                  </Link>
                </td>
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
      {/* Modal */}
      <div
        className="modal fade"
        id="export"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content border-light">
            <div className="modal-header pb-0 border-0 justify-content-end">
              <button
                type="button"
                className="close btn p-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                  <label htmlFor="lang" className="text-lighter text-sm">
                    {t('labels.language')}
                  </label>
                  <div className="my-1">
                    <input
                      name="lang"
                      id="arabic"
                      type="radio"
                      value="1"
                      className="custom-radio"
                    />
                    <label htmlFor="arabic" className="radio-label">
                      {t('labels.arabic')}
                    </label>
                  </div>
                  <div className="my-1">
                    <input
                      name="lang"
                      id="english"
                      type="radio"
                      value="2"
                      className="custom-radio"
                    />
                    <label htmlFor="english" className="radio-label">
                      {t('labels.english')}
                    </label>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                  <label htmlFor="tableDir" className="text-lighter text-sm">
                    {t('labels.tableDirection')}
                  </label>
                  <div className="my-1">
                    <input
                      name="lang"
                      id="rtl"
                      type="radio"
                      value="1"
                      className="custom-radio"
                    />
                    <label htmlFor="rtl" className="radio-label">
                      {t('labels.rtl')}
                    </label>
                  </div>
                  <div className="my-1">
                    <input
                      name="lang"
                      id="ltr"
                      type="radio"
                      value="2"
                      className="custom-radio"
                    />
                    <label htmlFor="ltr" className="radio-label">
                      {t('labels.ltr')}
                    </label>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                  <label htmlFor="fileType" className="text-lighter text-sm">
                    {t('labels.fileType')}
                  </label>
                  <div className="my-1">
                    <input
                      name="lang"
                      id="pdf"
                      type="radio"
                      value="1"
                      className="custom-radio"
                    />
                    <label htmlFor="pdf" className="radio-label">
                      PDF
                    </label>
                  </div>
                  <div className="my-1">
                    <input
                      name="lang"
                      id="excel"
                      type="radio"
                      value="2"
                      className="custom-radio"
                    />
                    <label htmlFor="excel" className="radio-label">
                      Excel
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn text-white btn-sm"
                style={{
                  background:
                    "var(--green-color)",
                  marginRight: "5px",
                  fontSize: "13px",
                }}
              >
                {t('btns.export')}
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                style={{ fontSize: "13px" }}
                data-bs-dismiss="modal"
              >
                {t('btns.cancel')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessSector;