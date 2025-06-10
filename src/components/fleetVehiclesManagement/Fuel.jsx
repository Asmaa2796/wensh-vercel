import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const Fuel = () => {
  const {t,i18n} = useTranslation('global');
  const { setTitle } = useTitle();

  useEffect(() => {
        setTitle(t('sidenav.fuel'));
  }, [setTitle ,t, i18n.language]);
  return (
    <>
      {/* form */}
      <form className="table_form form-style my-3 py-3">
        <div className="row align-items-center">
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label className="text-light">{t("labels.orderNumber")}</label>
            <input type="text" name="orderNumber" />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label className="text-light">{t("labels.vehiclePlate")}</label>
            <input type="text" name="vehicle_plate" />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label className="text-light">{t("labels.fuelType")}</label>
            <select name="fuel_type">
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label className="text-light">{t("labels.status")}</label>
            <select name="status">
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label className="text-light">{t("labels.employee")}</label>
            <select name="employee">
                <option value="1">-</option>
                <option value="2">-</option>
            </select>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label className="text-light">{t("labels.report")}</label>
            <input type="text" name="report" />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12 text-center">
            <button className="btn show_result">{t("btns.viewResults")}</button>
            <button className="btn show_all">{t("btns.viewAll")}</button>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12 text-center">
            <Link to="">
              <span
                className="btn btn-warning btn-sm text-sm px-3"
                style={{ marginTop: "45px" }}
              >
                {t("labels.addFuelRequest")}
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
                  {t("labels.orderNumber")}
                </th>
                <th scope="col" className="text-lighter">
                  {t("labels.vehiclePlate")}
                </th>
                <th scope="col" className="text-lighter">
                  {t("labels.fuelType")}
                </th>
                <th scope="col" className="text-lighter">
                  {t("labels.status")}
                </th>
                <th scope="col" className="text-lighter">
                  {t("labels.litersCount")}
                </th>
                <th scope="col" className="text-lighter">
                  {t("labels.cost")}
                </th>
                <th scope="col" className="text-lighter">
                  {t("labels.employee")}
                </th>
                <th scope="col" className="text-lighter">
                  {t("labels.refuelDate")}
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">PO139</td>
                <td className="sub-text">أ س ر 8294</td>
                <td className="sub-text">اصلاح اطارات</td>
                <td className="highlight-text">{t('labels.cancelled')}</td>
                <td className="sub-text">3</td>
                <td className="sub-text">$ 30</td>
                <td className="text-color">احمد عابدين</td>
                <td className="sub-text" style={{direction:"ltr"}}>21/05/2025 02:52 PM</td>
                <td>
                  <div className="d-flex">
                    <Link to="">
                      <span className="text-lighter px-1 mx-1 mb-0">
                        <i className="bi bi-eye"></i>
                      </span>
                    </Link>
                    <Link to="">
                      <span className="text-danger px-1 mx-1 mb-0">
                        <i className="bi bi-trash"></i>
                      </span>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">PO139</td>
                <td className="sub-text">أ س ر 8294</td>
                <td className="sub-text">اصلاح اطارات</td>
                <td className="highlight-text">{t('labels.cancelled')}</td>
                <td className="sub-text">3</td>
                <td className="sub-text">$ 30</td>
                <td className="text-color">احمد عابدين</td>
                <td className="sub-text" style={{direction:"ltr"}}>21/05/2025 02:52 PM</td>
                <td>
                  <div className="d-flex">
                    <Link to="">
                      <span className="text-lighter px-1 mx-1 mb-0">
                        <i className="bi bi-eye"></i>
                      </span>
                    </Link>
                    <Link to="">
                      <span className="text-danger px-1 mx-1 mb-0">
                        <i className="bi bi-trash"></i>
                      </span>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">PO139</td>
                <td className="sub-text">أ س ر 8294</td>
                <td className="sub-text">اصلاح اطارات</td>
                <td className="highlight-text">{t('labels.cancelled')}</td>
                <td className="sub-text">3</td>
                <td className="sub-text">$ 30</td>
                <td className="text-color">احمد عابدين</td>
                <td className="sub-text" style={{direction:"ltr"}}>21/05/2025 02:52 PM</td>
                <td>
                  <div className="d-flex">
                    <Link to="">
                      <span className="text-lighter px-1 mx-1 mb-0">
                        <i className="bi bi-eye"></i>
                      </span>
                    </Link>
                    <Link to="">
                      <span className="text-danger px-1 mx-1 mb-0">
                        <i className="bi bi-trash"></i>
                      </span>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">PO139</td>
                <td className="sub-text">أ س ر 8294</td>
                <td className="sub-text">اصلاح اطارات</td>
                <td className="highlight-text">{t('labels.cancelled')}</td>
                <td className="sub-text">3</td>
                <td className="sub-text">$ 30</td>
                <td className="text-color">احمد عابدين</td>
                <td className="sub-text" style={{direction:"ltr"}}>21/05/2025 02:52 PM</td>
                <td>
                  <div className="d-flex">
                    <Link to="">
                      <span className="text-lighter px-1 mx-1 mb-0">
                        <i className="bi bi-eye"></i>
                      </span>
                    </Link>
                    <Link to="">
                      <span className="text-danger px-1 mx-1 mb-0">
                        <i className="bi bi-trash"></i>
                      </span>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">PO139</td>
                <td className="sub-text">أ س ر 8294</td>
                <td className="sub-text">اصلاح اطارات</td>
                <td className="highlight-text">{t('labels.cancelled')}</td>
                <td className="sub-text">3</td>
                <td className="sub-text">$ 30</td>
                <td className="text-color">احمد عابدين</td>
                <td className="sub-text" style={{direction:"ltr"}}>21/05/2025 02:52 PM</td>
                <td>
                  <div className="d-flex">
                    <Link to="">
                      <span className="text-lighter px-1 mx-1 mb-0">
                        <i className="bi bi-eye"></i>
                      </span>
                    </Link>
                    <Link to="">
                      <span className="text-danger px-1 mx-1 mb-0">
                        <i className="bi bi-trash"></i>
                      </span>
                    </Link>
                  </div>
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

export default Fuel;