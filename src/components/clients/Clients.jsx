import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import "./clients.css";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
const Vendors = () => {
  const {t,i18n} = useTranslation('global');
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle(t('sidenav.individualClients'));
  }, [setTitle ,t, i18n.language]);
  return (
    <>
      {/* form */}
      <form className="table_form form-style my-3 py-3">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t('labels.name')}</label>
            <select name="name">
              <option value="">{t('labels.selectItem')}</option>
            </select>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t('labels.email')}</label>
            <input type="email" name="email" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t('labels.status')}</label>
            <select name="vendor_type">
              <option value="">{t('labels.selectItem')}</option>
            </select>
          </div>
          <div className="col-xl-6 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t('labels.report')}</label>
            <input name="report"/>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 text-center">
            <button className="btn show_result">{t('btns.viewResults')}</button>
            <button className="btn show_all">{t('btns.viewAll')}</button>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 text-center">
            <Link to="add_client">
              <span
                className="btn btn-success btn-sm text-sm px-3"
                style={{
                  background:
                    "var(--green-color)",
                    marginTop:"45px",
                    fontSize:"14px"
                }}
              >
                {t('btns.add')}
              </span>
            </Link>
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
                  {t('labels.phone')}
                </th>
                <th scope="col" className="text-lighter">
                  {t('labels.currentBalance')}
                </th>
                <th scope="col" className="text-lighter">
                  {t('labels.rating')}
                </th>
                <th className="text-lighter">{t('labels.status')}</th>
                <th className="text-lighter"> {t('sidenav.tripRequests')}</th>
                <th className="text-lighter">{t('labels.registration')}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">40023228</td>
                <td className="sub-text">maqsood</td>
                <td className="sub-text" style={{direction:"ltr"}}>+966 502103989</td>
                <td className="sub-text">$ 0</td>
                <td className="sub-text"><i className="bi bi-star text-warning"></i> 0</td>
                <td style={{color:"#7ba946"}}>{t('labels.active')} </td>
                <td className="sub-text">{t('labels.nothing')} </td>
                <td className="sub-text" style={{direction:"ltr"}}>21/05/2025 02:52 PM</td>
                <td className="d-flex justify-content-center">
                  <Link to="">
                    <span className="text-lighter px-1 mx-1 mb-0">
                      <i className="bi bi-eye"></i>
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">40023228</td>
                <td className="sub-text">maqsood</td>
                <td className="sub-text" style={{direction:"ltr"}}>+966 502103989</td>
                <td className="sub-text">$ 0</td>
                <td className="sub-text"><i className="bi bi-star text-warning"></i> 0</td>
                <td style={{color:"#7ba946"}}>{t('labels.active')} </td>
                <td className="sub-text">{t('labels.nothing')} </td>
                <td className="sub-text" style={{direction:"ltr"}}>21/05/2025 02:52 PM</td>
                <td className="d-flex justify-content-center">
                  <Link to="">
                    <span className="text-lighter px-1 mx-1 mb-0">
                      <i className="bi bi-eye"></i>
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">40023228</td>
                <td className="sub-text">maqsood</td>
                <td className="sub-text" style={{direction:"ltr"}}>+966 502103989</td>
                <td className="sub-text">$ 0</td>
                <td className="sub-text"><i className="bi bi-star text-warning"></i> 0</td>
                <td style={{color:"#7ba946"}}>{t('labels.active')} </td>
                <td className="sub-text">{t('labels.nothing')} </td>
                <td className="sub-text" style={{direction:"ltr"}}>21/05/2025 02:52 PM</td>
                <td className="d-flex justify-content-center">
                  <Link to="">
                    <span className="text-lighter px-1 mx-1 mb-0">
                      <i className="bi bi-eye"></i>
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">40023228</td>
                <td className="sub-text">maqsood</td>
                <td className="sub-text" style={{direction:"ltr"}}>+966 502103989</td>
                <td className="sub-text">$ 0</td>
                <td className="sub-text"><i className="bi bi-star text-warning"></i> 0</td>
                <td style={{color:"#7ba946"}}>{t('labels.active')} </td>
                <td className="sub-text">{t('labels.nothing')} </td>
                <td className="sub-text" style={{direction:"ltr"}}>21/05/2025 02:52 PM</td>
                <td className="d-flex justify-content-center">
                  <Link to="">
                    <span className="text-lighter px-1 mx-1 mb-0">
                      <i className="bi bi-eye"></i>
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">40023228</td>
                <td className="sub-text">maqsood</td>
                <td className="sub-text" style={{direction:"ltr"}}>+966 502103989</td>
                <td className="sub-text">$ 0</td>
                <td className="sub-text"><i className="bi bi-star text-warning"></i> 0</td>
                <td style={{color:"#7ba946"}}>{t('labels.active')} </td>
                <td className="sub-text">{t('labels.nothing')} </td>
                <td className="sub-text" style={{direction:"ltr"}}>21/05/2025 02:52 PM</td>
                <td className="d-flex justify-content-center">
                  <Link to="">
                    <span className="text-lighter px-1 mx-1 mb-0">
                      <i className="bi bi-eye"></i>
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
    </>
  );
};

export default Vendors;