import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import "./branches.css";
import { Link } from "react-router-dom";
const Branches = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("فروع الونش");
  }, [setTitle]);
  return (
    <>
      {/* form */}
      <form className="table_form form-style my-3 py-3">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-4 col-lg-6 col-md-6 col-12">
            <label className="text-light">الحالة</label>
            <select name="status">
              <option value="">حدد عنصر</option>
            </select>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-12">
            <label className="text-light">تقرير</label>
            <select name="report">
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
                  #
                </th>
                <th scope="col" className="text-lighter">
                  رقم الفرع
                </th>
                <th scope="col" className="text-lighter">
                  اسم
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
                <td className="sub-text">WB3</td>
                <td className="sub-text">ونش (التأجير)</td>
                <td className="text-color">مفعل</td>
                <td className="sub-text" style={{direction:"ltr"}}>03:39 PM 02/01/2025 </td>
                <td className="d-flex justify-content-center">
                  <Link to={`view_branch/1`}>
                    <span className="text-lighter px-1 mx-1 mb-0">
                      <i className="bi bi-eye"></i>
                    </span>
                  </Link>
                  <Link to={`edit_branch/1`}>
                    <span className="text-color px-1 mx-1 mb-0">
                      <i className="bi bi-pen"></i>
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="sub-text">12</td>
                <td className="sub-text">WB3</td>
                <td className="sub-text">ونش (التأجير)</td>
                <td className="highlight-text">غير مفعل</td>
                <td className="sub-text" style={{direction:"ltr"}}>03:39 PM 02/01/2025 </td>
                <td className="d-flex justify-content-center">
                  <Link to={`view_branch/1`}>
                    <span className="text-lighter px-1 mx-1 mb-0">
                      <i className="bi bi-eye"></i>
                    </span>
                  </Link>
                  <Link to={`edit_branch/1`}>
                    <span className="text-color px-1 mx-1 mb-0">
                      <i className="bi bi-pen"></i>
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="sub-text">12</td>
                <td className="sub-text">WB3</td>
                <td className="sub-text">ونش (التأجير)</td>
                <td className="text-color">مفعل</td>
                <td className="sub-text" style={{direction:"ltr"}}>03:39 PM 02/01/2025 </td>
                <td className="d-flex justify-content-center">
                  <Link to={`view_branch/1`}>
                    <span className="text-lighter px-1 mx-1 mb-0">
                      <i className="bi bi-eye"></i>
                    </span>
                  </Link>
                  <Link to={`edit_branch/1`}>
                    <span className="text-color px-1 mx-1 mb-0">
                      <i className="bi bi-pen"></i>
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="sub-text">12</td>
                <td className="sub-text">WB3</td>
                <td className="sub-text">ونش (التأجير)</td>
                <td className="highlight-text">غير مفعل</td>
                <td className="sub-text" style={{direction:"ltr"}}>03:39 PM 02/01/2025 </td>
                <td className="d-flex justify-content-center">
                  <Link to={`view_branch/1`}>
                    <span className="text-lighter px-1 mx-1 mb-0">
                      <i className="bi bi-eye"></i>
                    </span>
                  </Link>
                  <Link to={`edit_branch/1`}>
                    <span className="text-color px-1 mx-1 mb-0">
                      <i className="bi bi-pen"></i>
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="sub-text">12</td>
                <td className="sub-text">WB3</td>
                <td className="sub-text">ونش (التأجير)</td>
                <td className="text-color">مفعل</td>
                <td className="sub-text" style={{direction:"ltr"}}>03:39 PM 02/01/2025 </td>
                <td className="d-flex justify-content-center">
                  <Link to={`view_branch/1`}>
                    <span className="text-lighter px-1 mx-1 mb-0">
                      <i className="bi bi-eye"></i>
                    </span>
                  </Link>
                  <Link to={`edit_branch/1`}>
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

export default Branches;
