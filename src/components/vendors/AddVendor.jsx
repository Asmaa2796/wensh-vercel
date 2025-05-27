import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import "./vendors.css";
import PhoneInput from "./PhoneInput";
const AddVendor = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("موردين المشتريات > إضافة مورد مشتريات");
  }, [setTitle]);
  return (
    <>
      {/* form */}
      <form className="table_form form-style my-3 py-3 div-bg">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">الاسم ( عربي )</label>
            <input type="text" className="input-bg" name="ar_name" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">الاسم ( English ) </label>
            <input type="text" className="input-bg" name="en_name" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">رقم الجوال</label>
            <PhoneInput/>
          </div>
         
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">النشاط</label>
            <select name="activity" className="w-100 input-bg">
              <option value="1">-</option>
              <option value="2">-</option>
            </select>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">نوع المورد</label>
            <select name="vendor_type" className="w-100 input-bg">
              <option value="1">-</option>
              <option value="2">-</option>
            </select>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">نوع الحساب</label>
            <select name="account_type" className="w-100 input-bg">
              <option value="1">-</option>
              <option value="2">-</option>
            </select>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">الحالة</label>
            <label className="toggle">
              <input className="toggle-checkbox" type="checkbox" />
              <div className="toggle-switch"></div>
              <span className="toggle-label"></span>
            </label>
          </div>

          <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
            <button className="btn px-4 save">إضافة</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddVendor;
