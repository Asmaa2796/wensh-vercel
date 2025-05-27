import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import { Link } from "react-router-dom";
const Ratings = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("التقييمات");
  }, [setTitle]);
  return (
    <>
      {/* form */}
      <form className="table_form form-style my-3 py-3">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">من</label>
             <input type="text" name="from" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">إلى</label>
            <input type="text" name="to" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">الحالة</label>
            <select name="vendor_type">
              <option value="">حدد عنصر</option>
            </select>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">التقييم</label>
            <select name="rate">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">تقرير</label>
            <input name="report"/>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12 text-center">
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
                  التعليق 
                </th>
                <th scope="col" className="text-lighter">
                  التقييم
                </th>
                <th scope="col" className="text-lighter">
                  من 
                </th>
                <th scope="col" className="text-lighter">
                  إلى
                </th>
                <th scope="col" className="text-lighter">
                  الطلب
                </th>
                <th className="text-lighter">تاريخ الإرسال </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">ممتاز جداً ورقي بالتعامل</td>
                <td className="sub-text">
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                </td>
                <td className="sub-text">مزود الخدمة - <span className="text-color"> أحمد عابدين</span></td>
                <td className="sub-text">قطاع الأعمال  - <span className="text-color">مؤسسة إدارة الحلوى للحلويات</span></td>
                <td className="text-color">#TO29874</td>
                <td className="sub-text" style={{direction:"ltr"}}>21/05/2025 02:52 PM</td>
              </tr>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">ممتاز جداً ورقي بالتعامل</td>
                <td className="sub-text">
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                </td>
                <td className="sub-text">مزود الخدمة - <span className="text-color"> أحمد عابدين</span></td>
                <td className="sub-text">قطاع الأعمال  - <span className="text-color">مؤسسة إدارة الحلوى للحلويات</span></td>
                <td className="text-color">#TO29874</td>
                <td className="sub-text" style={{direction:"ltr"}}>21/05/2025 02:52 PM</td>
              </tr>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">ممتاز جداً ورقي بالتعامل</td>
                <td className="sub-text">
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                </td>
                <td className="sub-text">مزود الخدمة - <span className="text-color"> أحمد عابدين</span></td>
                <td className="sub-text">قطاع الأعمال  - <span className="text-color">مؤسسة إدارة الحلوى للحلويات</span></td>
                <td className="text-color">#TO29874</td>
                <td className="sub-text" style={{direction:"ltr"}}>21/05/2025 02:52 PM</td>
              </tr>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">ممتاز جداً ورقي بالتعامل</td>
                <td className="sub-text">
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                </td>
                <td className="sub-text">مزود الخدمة - <span className="text-color"> أحمد عابدين</span></td>
                <td className="sub-text">قطاع الأعمال  - <span className="text-color">مؤسسة إدارة الحلوى للحلويات</span></td>
                <td className="text-color">#TO29874</td>
                <td className="sub-text" style={{direction:"ltr"}}>21/05/2025 02:52 PM</td>
              </tr>
              <tr>
                <td className="sub-text">23154</td>
                <td className="sub-text">ممتاز جداً ورقي بالتعامل</td>
                <td className="sub-text">
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                </td>
                <td className="sub-text">مزود الخدمة - <span className="text-color"> أحمد عابدين</span></td>
                <td className="sub-text">قطاع الأعمال  - <span className="text-color">مؤسسة إدارة الحلوى للحلويات</span></td>
                <td className="text-color">#TO29874</td>
                <td className="sub-text" style={{direction:"ltr"}}>21/05/2025 02:52 PM</td>
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

export default Ratings;