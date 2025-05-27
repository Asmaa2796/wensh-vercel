import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import "./favourites.css";
const Favourites = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("المفضلة");
  }, [setTitle]);
  return (
    <>
      {/* form */}
      <form className="table_form form-style my-3 py-3">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-4 col-lg-6 col-md-6 col-12">
            <label className="text-light">رقم المرجع</label>
            <select name="created_by">
              <option value="">حدد عنصر</option>
            </select>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-12">
            <label className="text-light">الحالة</label>
            <select name="status">
              <option value="">حدد عنصر</option>
            </select>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-12 text-center">
            <button className="btn show_result">عرض النتائج</button>
            <button className="btn show_all">عرض الكل</button>
          </div>
        </div>
      </form>
      <div className="table_wrapper">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="text-lighter">
                  <div className="custom-checkbox">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-1"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-1"></label>
                  </div>
                </th>
                <th scope="col" className="text-lighter">
                  #
                </th>
                <th scope="col" className="text-lighter">
                  اسم
                </th>
                <th scope="col" className="text-lighter">
                  النوع
                </th>
                <th scope="col" className="text-lighter">
                  أنشئت بواسطة
                </th>
                <th scope="col" className="text-lighter">
                  التاريخ
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="sub-text">
                  <div className="custom-checkbox">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-2"
                      type="checkbox"
                      value="value2"
                    />
                    <label htmlFor="styled-checkbox-2"></label>
                  </div>
                </td>
                <td className="sub-text">12</td>
                <td className="sub-text">احمد ابراهيم بيومي احمد</td>
                <td className="sub-text">فواتير المشتريات</td>
                <td className="sub-text">احمد ابراهيم بيومي احمد</td>
                <td className="sub-text">11/05/2025</td>
              </tr>
              <tr>
                <td className="sub-text">
                  <div className="custom-checkbox">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-2"
                      type="checkbox"
                      value="value2"
                    />
                    <label htmlFor="styled-checkbox-2"></label>
                  </div>
                </td>
                <td className="sub-text">12</td>
                <td className="sub-text">احمد ابراهيم بيومي احمد</td>
                <td className="sub-text">فواتير المشتريات</td>
                <td className="sub-text">احمد ابراهيم بيومي احمد</td>
                <td className="sub-text">11/05/2025</td>
              </tr>
              <tr>
                <td className="sub-text">
                  <div className="custom-checkbox">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-2"
                      type="checkbox"
                      value="value2"
                    />
                    <label htmlFor="styled-checkbox-2"></label>
                  </div>
                </td>
                <td className="sub-text">12</td>
                <td className="sub-text">احمد ابراهيم بيومي احمد</td>
                <td className="sub-text">فواتير المشتريات</td>
                <td className="sub-text">احمد ابراهيم بيومي احمد</td>
                <td className="sub-text">11/05/2025</td>
              </tr>
              <tr>
                <td className="sub-text">
                  <div className="custom-checkbox">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-2"
                      type="checkbox"
                      value="value2"
                    />
                    <label htmlFor="styled-checkbox-2"></label>
                  </div>
                </td>
                <td className="sub-text">12</td>
                <td className="sub-text">احمد ابراهيم بيومي احمد</td>
                <td className="sub-text">فواتير المشتريات</td>
                <td className="sub-text">احمد ابراهيم بيومي احمد</td>
                <td className="sub-text">11/05/2025</td>
              </tr>
              <tr>
                <td className="sub-text">
                  <div className="custom-checkbox">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-2"
                      type="checkbox"
                      value="value2"
                    />
                    <label htmlFor="styled-checkbox-2"></label>
                  </div>
                </td>
                <td className="sub-text">12</td>
                <td className="sub-text">احمد ابراهيم بيومي احمد</td>
                <td className="sub-text">فواتير المشتريات</td>
                <td className="sub-text">احمد ابراهيم بيومي احمد</td>
                <td className="sub-text">11/05/2025</td>
              </tr>
              <tr>
                <td className="sub-text">
                  <div className="custom-checkbox">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-2"
                      type="checkbox"
                      value="value2"
                    />
                    <label htmlFor="styled-checkbox-2"></label>
                  </div>
                </td>
                <td className="sub-text">12</td>
                <td className="sub-text">احمد ابراهيم بيومي احمد</td>
                <td className="sub-text">فواتير المشتريات</td>
                <td className="sub-text">احمد ابراهيم بيومي احمد</td>
                <td className="sub-text">11/05/2025</td>
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

export default Favourites;