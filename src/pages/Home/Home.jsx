import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import BarChart from "../../components/charts/BarChart";
import DoughnutCart from "../../components/charts/DoughnutChart";
import { useTranslation } from 'react-i18next';
import './home.css';
import CircleChart from "../../components/charts/CircleChart";
const Home = () => {
  const {t,i18n} = useTranslation('global');
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle(t('sidenav.home'));
  }, [setTitle, t, i18n.language]);
  return (
    <div className="main_content">
      <div className="row justify-content-center">
        <div className="col-xl-2 col-lg-4 col-md-6 col-12">
          <div className="stat_card">
            <div className="icon">
              <i
                className="bi bi-currency-dollar"
                style={{ color: "#3683FF" }}
              ></i>
            </div>
            <h5>248k</h5>
            <b> {t('home.totalSales')} </b>
            <img src="/img/icons/stat1.png" alt="stat1" />
          </div>
        </div>
        <div className="col-xl-2 col-lg-4 col-md-6 col-12">
          <div className="stat_card">
            <div className="icon">
              <i
                className="bi bi-currency-dollar"
                style={{ color: "#86D02C" }}
              ></i>
            </div>
            <h5>23149</h5>
            <b> {t('home.individualCustomers')} </b>
            <img src="/img/icons/stat2.png" alt="stat2" />
          </div>
        </div>
        <div className="col-xl-2 col-lg-4 col-md-6 col-12">
          <div className="stat_card">
            <div className="icon">
              <i
                className="bi bi-currency-dollar"
                style={{ color: "#FA7146" }}
              ></i>
            </div>
            <h5>13211</h5>
            <b> {t('home.serviceProviders')} </b>
            <img src="/img/icons/stat3.png" alt="stat3" />
          </div>
        </div>
        <div className="col-xl-2 col-lg-4 col-md-6 col-12">
          <div className="stat_card">
            <div className="icon">
              <i
                className="bi bi-currency-dollar"
                style={{ color: "#3683FF" }}
              ></i>
            </div>
            <h5>13211</h5>
            <b> {t('home.tripRequests')} </b>
            <img src="/img/icons/stat4.png" alt="stat4" />
          </div>
        </div>
        <div className="col-xl-2 col-lg-4 col-md-6 col-12">
          <div className="stat_card">
            <div className="icon">
              <i
                className="bi bi-currency-dollar"
                style={{ color: "#FFC107" }}
              ></i>
            </div>
            <h5>13211</h5>
            <b> {t('home.completed')} </b>
            <img src="/img/icons/stat5.png" alt="stat5" />
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-12 col-12">
          <div className="div-bg">
            <h5 className="stat-title">
              <span> {t('home.requestStats')} </span>
              <select>
                <option value="all">{t('home.all')}</option>
              </select>
            </h5>
            <DoughnutCart />
            <hr className="border-light mb-3" />
            <ul className="p-0 mb-0 stats list-unstyled">
              <li>
                <span>
                  <i className="bi bi-circle"></i> {t('home.inService')}
                </span>
                <span>68%</span>
              </li>
              <li>
                <span>
                  <i className="bi bi-circle"></i> {t('home.done')}
                </span>
                <span>25%</span>
              </li>
              <li>
                <span>
                  <i className="bi bi-circle"></i> {t('home.cancelled')}
                </span>
                <span>14%</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-12 col-12">
          <div className="barChart div-bg">
            <h5 className="stat-title">
              <span> {t('home.userStats')} </span>
              <select>
                <option value="annual">{t('home.yearly')}</option>
                <option value="monthly">{t('home.monthly')}</option>
              </select>
            </h5>
            <BarChart />
            <CircleChart/>
          </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
          <div className="providers_on_map div-bg mt-4">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-12 col-12">
                <h5 className="sub-text mb-3">
                  {t('home.providersOnMap')}
                </h5>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-12">
                <div className="input-div">
                  <span>
                    <i className="bi bi-search"></i>
                  </span>
                  <input
                    type="text"
                    placeholder={t('home.enterCityName')}
                  />
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-12">
                <br />
                <div className="map"></div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-12 col-12">
                <br />
                <select>
                  <option value="">{t('home.undefined')}</option>
                </select>
                <select>
                  <option value="">{t('home.status')}</option>
                </select>
                <ul className="p-0 mb-0 map-ul list-unstyled">
                  <li>
                    <span>
                      <i className="bi bi-circle"></i> {t('home.busy')}
                    </span>
                    <span>68%</span>
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-circle"></i> {t('home.offline')}
                    </span>
                    <span>68%</span>
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-circle"></i> {t('home.online')}
                    </span>
                    <span>68%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;