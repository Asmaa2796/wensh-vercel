import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import './exportOrders.css';
const ExportOrders = () => {
  const { setTitle } = useTitle();
  
    useEffect(() => {
      setTitle("طلبات التصدير");
    }, [setTitle]);
  return (
    <>
      {/* form */}
      <form className="table_form form-style my-3 py-3">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-3 col-lg-6 col-md-6 col-12">
            <label className="text-light">أنشئت بواسطة</label>
            <select name="created_by">
              <option value="">حدد عنصر</option>
            </select>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-12">
            <label className="text-light">رقم الطلب</label>
            <select name="order_number">
              <option value="">حدد عنصر</option>
            </select>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-12">
            <label className="text-light">نوع العميل</label>
            <select name="client_type">
              <option value="">حدد عنصر</option>
            </select>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-12">
            <label className="text-light">النوع</label>
            <select name="type">
              <option value="">حدد عنصر</option>
            </select>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-12">
            <label className="text-light">اللغة</label>
            <select name="lang">
              <option value="">حدد عنصر</option>
            </select>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-12">
            <label className="text-light">نوع الملف</label>
            <select name="file_type">
              <option value="">حدد عنصر</option>
            </select>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-12">
            <label className="text-light">الحالة</label>
            <select name="status">
              <option value="">حدد عنصر</option>
            </select>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-12">
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
                  رقم الطلب
                </th>
                <th scope="col" className="text-lighter">
                  اسم
                </th>
                <th scope="col" className="text-lighter">
                  نوع الرحلات
                </th>
                <th scope="col" className="text-lighter">
                  نوع الملف
                </th>
                <th scope="col" className="text-lighter">
                  اللغة
                </th>
                <th scope="col" className="text-lighter">
                  الحالة
                </th>
                <th scope="col" className="text-lighter">
                  من تاريخ
                </th>
                <th scope="col" className="text-lighter">
                  إلى تاريخ
                </th>
                <th scope="col" className="text-lighter">
                  تاريخ الانتهاء
                </th>
                <th scope="col" className="text-lighter">
                  أنشئت بواسطة
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="sub-text">#</td>
                <td className="sub-text">EX2620</td>
                <td>
                  <span className="sub-text">قطاع الأعمال</span>
                  <b className="text-color d-block">شركة المطاحن الأولى</b>
                </td>
                <td className="sub-text">طلبات الرحلات</td>
                <td className="sub-text">Excel</td>
                <td className="sub-text">English</td>
                <td>
                  <b className="text-color d-block">مكتمل</b>
                </td>
                <td className="sub-text">01/05/2025</td>
                <td className="sub-text">14/05/2025</td>
                <td>
                  <span className="sub-text">18/06/2025</span>
                  <b className="highlight-text d-block">متبقي 28 يوم</b>
                </td>
                <td>
                  <b className="text-color">احمد ابراهيم بيومي </b>
                </td>
              </tr>
              <tr>
                <td className="sub-text">#</td>
                <td className="sub-text">EX2620</td>
                <td>
                  <span className="sub-text">قطاع الأعمال</span>
                  <b className="text-color d-block">شركة المطاحن الأولى</b>
                </td>
                <td className="sub-text">طلبات الرحلات</td>
                <td className="sub-text">Excel</td>
                <td className="sub-text">English</td>
                <td>
                  <b className="text-color d-block">مكتمل</b>
                </td>
                <td className="sub-text">01/05/2025</td>
                <td className="sub-text">14/05/2025</td>
                <td>
                  <span className="sub-text">18/06/2025</span>
                  <b className="highlight-text d-block">متبقي 28 يوم</b>
                </td>
                <td>
                  <b className="text-color">احمد ابراهيم بيومي </b>
                </td>
              </tr>
              <tr>
                <td className="sub-text">#</td>
                <td className="sub-text">EX2620</td>
                <td>
                  <span className="sub-text">قطاع الأعمال</span>
                  <b className="text-color d-block">شركة المطاحن الأولى</b>
                </td>
                <td className="sub-text">طلبات الرحلات</td>
                <td className="sub-text">Excel</td>
                <td className="sub-text">English</td>
                <td>
                  <b className="text-color d-block">مكتمل</b>
                </td>
                <td className="sub-text">01/05/2025</td>
                <td className="sub-text">14/05/2025</td>
                <td>
                  <span className="sub-text">18/06/2025</span>
                  <b className="highlight-text d-block">متبقي 28 يوم</b>
                </td>
                <td>
                  <b className="text-color">احمد ابراهيم بيومي </b>
                </td>
              </tr>
              <tr>
                <td className="sub-text">#</td>
                <td className="sub-text">EX2620</td>
                <td>
                  <span className="sub-text">قطاع الأعمال</span>
                  <b className="text-color d-block">شركة المطاحن الأولى</b>
                </td>
                <td className="sub-text">طلبات الرحلات</td>
                <td className="sub-text">Excel</td>
                <td className="sub-text">English</td>
                <td>
                  <b className="text-color d-block">مكتمل</b>
                </td>
                <td className="sub-text">01/05/2025</td>
                <td className="sub-text">14/05/2025</td>
                <td>
                  <span className="sub-text">18/06/2025</span>
                  <b className="highlight-text d-block">متبقي 28 يوم</b>
                </td>
                <td>
                  <b className="text-color">احمد ابراهيم بيومي </b>
                </td>
              </tr>
              <tr>
                <td className="sub-text">#</td>
                <td className="sub-text">EX2620</td>
                <td>
                  <span className="sub-text">قطاع الأعمال</span>
                  <b className="text-color d-block">شركة المطاحن الأولى</b>
                </td>
                <td className="sub-text">طلبات الرحلات</td>
                <td className="sub-text">Excel</td>
                <td className="sub-text">English</td>
                <td>
                  <b className="text-color d-block">مكتمل</b>
                </td>
                <td className="sub-text">01/05/2025</td>
                <td className="sub-text">14/05/2025</td>
                <td>
                  <span className="sub-text">18/06/2025</span>
                  <b className="highlight-text d-block">متبقي 28 يوم</b>
                </td>
                <td>
                  <b className="text-color">احمد ابراهيم بيومي </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* pagination  */}
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true"><i class="fa fa-caret-right"></i></a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#"><i class="fa fa-caret-left"></i></a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ExportOrders;