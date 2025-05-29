import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import './businessSector.css';
import { useTranslation } from 'react-i18next';
const AddBusinessSector = () => {
  const {t,i18n} = useTranslation('global');
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle(`${t('sidenav.businessList')} > ${t('btns.add')}`);
  }, [setTitle, t, i18n.language]);

  return (
    <>
      {/* form */}
      <form className="table_form form-style">
        {/* Nav tabs */}
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="basicInfo-tab"
              data-bs-toggle="tab"
              href="#basicInfo"
              role="tab"
            >
              {t('labels.basicInformation')}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="address-tab"
              data-bs-toggle="tab"
              href="#address"
              role="tab"
            >
              {t('labels.address')}
            </a>
          </li>
        </ul>

        {/* Tab panes */}
        <div className="tab-content mt-3 my-3 py-3 div-bg">
          <div className="tab-pane fade show active" id="basicInfo" role="tabpanel">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <label className="text-light">{t('labels.mainBranch')}</label>
                <input type="text" className="input-bg" name="main_branch" />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <label className="text-light">{t('labels.permission')} </label>
                <input type="text" className="input-bg" name="validity" />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                <label className="text-light"> {t('labels.clientType')}</label>
                <select name="client_type" className="w-100 input-bg">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                <label className="text-light">{t('labels.unifiedNumber')}</label>
                <input name="unified_number" className="input-bg" />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                <label className="text-light">{t('labels.commercialRegistrationNumber')}</label>
                <input name="commercial_number" className="input-bg" />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <label className="text-light">
                  {t('labels.legalNameAr')}
                </label>
                <input name="ar_build_name" className="input-bg" />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <label className="text-light">
                  {t('labels.legalNameEn')}
                </label>
                <input name="en_build_name" className="input-bg" />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <label className="text-light">{t('labels.branchAr')}</label>
                <select name="ar_branch" className="w-100 input-bg">
                  <option value="1">-</option>
                  <option value="2">-</option>
                </select>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <label className="text-light">{t('labels.branchEn')}</label>
                <select name="en_branch" className="w-100 input-bg">
                  <option value="1">-</option>
                  <option value="2">-</option>
                </select>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <label className="text-light">{t('labels.entityType')}</label>
                <select name="build_type" className="w-100 input-bg">
                  <option value="1">-</option>
                  <option value="2">-</option>
                </select>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <label className="text-light">{t('labels.commercialStatus')}</label>
                <select name="commercial_status" className="w-100 input-bg">
                  <option value="1">-</option>
                  <option value="2">-</option>
                </select>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                <label className="text-light">{t('labels.issueDate')}</label>
                <input type="date" name="release_date" className="input-bg" />
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                <label className="text-light"> {t('labels.activities')}</label>
                <select name="activities" className="w-100 input-bg">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                <label className="text-light"> {t('labels.taxNumber')} </label>
                <input type="text" name="tax_number" className="input-bg" />
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-12">
                <label className="text-light">{t('labels.status')} </label>
                <label className="toggle">
                  <input className="toggle-checkbox" type="checkbox" />
                  <div className="toggle-switch"></div>
                  <span className="toggle-label"></span>
                </label>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
                <button className="btn px-4 save">{t('btns.add')} </button>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="address" role="tabpanel">
            <b className="text-lighter text-sm">{t('labels.address')}</b>
            <p className="text-lighter">
                --------
                --------
                --------
                --------
                --------
                --------
                --------
            </p>
            <p className="text-lighter">
                --------
                --------
                --------
                --------
                --------
                --------
                --------
            </p>
            <p className="text-lighter">
                --------
                --------
                --------
                --------
                --------
                --------
                --------
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddBusinessSector;