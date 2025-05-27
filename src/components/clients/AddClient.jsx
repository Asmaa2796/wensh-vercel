import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import "./clients.css";
import PhoneInput from "../vendors/PhoneInput";
const AddClient = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("العملاء الأفراد > إضافة");
  }, [setTitle]);
  return (
    <>
      {/* form */}
      <form className="table_form form-style my-3 py-3 div-bg">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <label className="text-light">الاسم ( عربي )</label>
            <input type="text" className="input-bg" name="ar_name" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <label className="text-light">الاسم ( English ) </label>
            <input type="text" className="input-bg" name="en_name" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">رقم الجوال</label>
            <PhoneInput />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">البريد الإلكتروني </label>
            <input type="email" className="input-bg" name="email" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">الجنس</label>
            <select name="gender" className="w-100 input-bg">
              <option value="1">ذكر</option>
              <option value="2">أنثى</option>
            </select>
          </div>

          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
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

export default AddClient;
