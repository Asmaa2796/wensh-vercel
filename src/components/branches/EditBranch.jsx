import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import "./branches.css";
const EditBranch = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("فروع الونش > تعديل فرع ونش");
  }, [setTitle]);
  return (
    <>
      {/* form */}
      <form className="table_form form-style my-3 py-3 div-bg">
        <div className="row align-items-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <label className="text-light">الاسم</label>
            <input type="text" className="input-bg" name="name" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">حساب المبيعات</label>
            <input type="text" className="input-bg" name="sales_account" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">حساب مردودات المبيعات</label>
            <input
              type="text"
              className="input-bg"
              name="sales_returns_account"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">حساب أطراف ذات علاقة</label>
            <input
              type="text"
              className="input-bg"
              name="related_party_account"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">حساب المشتريات</label>
            <input type="text" className="input-bg" name="purchases_account" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">حساب مردودات المشتريات</label>
            <input
              type="text"
              className="input-bg"
              name="purchase_returns_account"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">حساب المبيعات الداخلية </label>
            <input
              type="text"
              className="input-bg"
              name="internal_sales_account"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">حساب تكلفة المبيعات الداخلية </label>
            <input
              type="text"
              className="input-bg"
              name="cost_internal_sales"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">حسابات النقدية </label>
            <input type="text" className="input-bg" name="cash_accounts" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">الحسابات البنكية</label>
            <input type="text" className="input-bg" name="bank_accounts" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">طريقة الدفع </label>
            <select name="payment_methods" className="w-100 input-bg">
              <option value="1">فيزا</option>
              <option value="2">نقدا</option>
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
            <button className="btn save">حفظ التعديلات</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditBranch;
