import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import { useTranslation } from 'react-i18next';
import "./vendors.css";
import PhoneInput from "./PhoneInput";
const AddVendor = () => {
  const {t,i18n} = useTranslation('global');
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle(`${t('labels.purchaseSuppliers')} > ${t('labels.addPurchaseSupplier')}`);
  }, [setTitle, t, i18n.language]);
  return (
    <>
      {/* form */}
      <form className="table_form form-style my-3 py-3 div-bg">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">{t('labels.nameArabic')}</label>
            <input type="text" className="input-bg" name="ar_name" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light"> {t('labels.nameEnglish')} </label>
            <input type="text" className="input-bg" name="en_name" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">{t('labels.phone')}</label>
            <PhoneInput/>
          </div>
         
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">{t('labels.activity')}</label>
            <select name="activity" className="w-100 input-bg">
              <option value="1">-</option>
              <option value="2">-</option>
            </select>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">{t('labels.supplierType')}</label>
            <select name="vendor_type" className="w-100 input-bg">
              <option value="1">-</option>
              <option value="2">-</option>
            </select>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">{t('labels.accountType')}</label>
            <select name="account_type" className="w-100 input-bg">
              <option value="1">-</option>
              <option value="2">-</option>
            </select>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <label className="text-light">{t('labels.status')}</label>
            <label className="toggle">
              <input className="toggle-checkbox" type="checkbox" />
              <div className="toggle-switch"></div>
              <span className="toggle-label"></span>
            </label>
          </div>

          <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
            <button className="btn px-4 save">{t('btns.add')}</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddVendor;
