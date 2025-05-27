import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import "./vendors.css";
import { Link } from "react-router-dom";
const Vendors = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("موردين المشتريات");
  }, [setTitle]);
  return (
    <>
      {/* form */}
      <form className="table_form form-style my-3 py-3">
        <div className="row align-items-center">
          <div className="col-xl-9 col-lg-9 col-md-12 col-12">
            <label className="text-light">الاسم</label>
            <select name="name">
              <option value="">حدد عنصر</option>
            </select>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label className="text-light">الحالة</label>
            <select name="status">
              <option value="">حدد عنصر</option>
            </select>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label className="text-light">نوع المورد </label>
            <select name="vendor_type">
              <option value="">حدد عنصر</option>
            </select>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-12">
            <label className="text-light">تقرير</label>
            <select name="report">
              <option value="">حدد عنصر</option>
            </select>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-12 text-center">
            <button className="btn show_result">عرض النتائج</button>
            <button className="btn show_all">عرض الكل</button>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-12 text-center">
            <Link to="add_vendor">
              <span
                className="btn btn-success btn-sm text-sm px-3"
                style={{
                  background:
                    "linear-gradient(90deg, #02803D 0%, #2DEC3A 100%)",
                    marginTop:"45px",
                    fontSize:"14px"
                }}
              >
                إضافة مورد مشتريات
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
                  رقم المورد
                </th>
                <th scope="col" className="text-lighter">
                  اسم
                </th>
                <th scope="col" className="text-lighter">
                  رقم الجوال
                </th>
                <th scope="col" className="text-lighter">
                  النوع
                </th>
                <th scope="col" className="text-lighter">
                  الحالة
                </th>
                <th scope="col" className="text-lighter">
                  تاريخ التسجيل
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="sub-text">12</td>
                <td className="sub-text">PS43</td>
                <td className="sub-text">ونش (التأجير)</td>
                <td className="sub-text" style={{direction:"ltr"}}>+966 565925299</td>
                <td className="sub-text">مشتريات</td>
                <td className="text-color">مفعل</td>
                <td className="sub-text" style={{direction:"ltr"}}>03:39 PM 02/01/2025 </td>
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
                <td className="sub-text">12</td>
                <td className="sub-text">PS43</td>
                <td className="sub-text">ونش (التأجير)</td>
                <td className="sub-text" style={{direction:"ltr"}}>+966 565925299</td>
                <td className="sub-text">مشتريات</td>
                <td className="text-color">مفعل</td>
                <td className="sub-text" style={{direction:"ltr"}}>03:39 PM 02/01/2025 </td>
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
                <td className="sub-text">12</td>
                <td className="sub-text">PS43</td>
                <td className="sub-text">ونش (التأجير)</td>
                <td className="sub-text" style={{direction:"ltr"}}>+966 565925299</td>
                <td className="sub-text">مشتريات</td>
                <td className="text-color">مفعل</td>
                <td className="sub-text" style={{direction:"ltr"}}>03:39 PM 02/01/2025 </td>
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
                <td className="sub-text">12</td>
                <td className="sub-text">PS43</td>
                <td className="sub-text">ونش (التأجير)</td>
                <td className="sub-text" style={{direction:"ltr"}}>+966 565925299</td>
                <td className="sub-text">مشتريات</td>
                <td className="text-color">مفعل</td>
                <td className="sub-text" style={{direction:"ltr"}}>03:39 PM 02/01/2025 </td>
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
                <td className="sub-text">12</td>
                <td className="sub-text">PS43</td>
                <td className="sub-text">ونش (التأجير)</td>
                <td className="sub-text" style={{direction:"ltr"}}>+966 565925299</td>
                <td className="sub-text">مشتريات</td>
                <td className="text-color">مفعل</td>
                <td className="sub-text" style={{direction:"ltr"}}>03:39 PM 02/01/2025 </td>
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
    </>
  );
};

export default Vendors;