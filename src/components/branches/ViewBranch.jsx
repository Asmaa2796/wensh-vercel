import React, { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";
import "./branches.css";
import { Link } from "react-router-dom";
const ViewBranch = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("فروع الونش > تفاصيل فرع ونش");
  }, [setTitle]);
  return (
    <>
      {/* view */}
      <div className="view">
        <div className="div-bg my-3">
          <h5 className="text-lighter text-md mb-4">معلومات الفرع</h5>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter">
                <span className="d-block text-custom my-1 text-lighter">
                  WB3
                </span>
                <span className="d-block text-custom my-1 text-lighter">
                  ونش (التأجير)
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                  الحالة :
                </span>
                <span className="d-block text-custom text-color">مفعل</span>
              </div>
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom my-1 text-lighter">
                  تاريخ الانشاء :
                </span>
                <span
                  className="d-block text-custom my-1 text-lighter"
                  style={{ direction: "ltr" }}
                >
                  03:39 PM 02/01/2025
                </span>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <br />
              <br />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                  طريقة الدفع :
                </span>
                <span className="d-block text-custom text-lighter">نقدا</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                  غير مفوتر مبيعات ( رحلات ) :
                </span>
                <span className="d-block text-custom text-lighter">
                  0 - <span className="text-color">عرض</span>
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                  رصيد المسودات ( مشتريات ) :
                </span>
                <span className="d-block text-custom text-lighter">
                  0 - <span className="text-color">عرض</span>
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                  طريقة اصدار الفواتير :
                </span>
                <span className="d-block text-xs text-lighter">غير محدد</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                  غير مفوتر مبيعات ( ايجارات ) :
                </span>
                <span className="d-block text-custom text-lighter">
                  0 - <span className="text-color">عرض</span>
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                  الرصيد الاجمالي :
                </span>
                <span
                  className="d-block text-custom"
                  style={{ color: "#98EC2D" }}
                >
                  358.821.69
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                  طريقة السداد بعد استلام الفاتورة :
                </span>
                <span className="d-block text-xs text-lighter">غير محدد</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                  غير مفوتر مشتريات ( ايجارات ) :
                </span>
                <span
                  className="d-block text-custom"
                  style={{ color: "#98EC2D" }}
                >
                  358.821.69
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                  الرصيد المستحق ( مبيعات ) :
                </span>
                <span className="d-block text-xs text-lighter">غير محدد</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                  الرصيد الحالى :
                </span>
                <span className="d-block text-custom">
                  <span style={{ color: "#98EC2D" }}>358.821.69</span> -{" "}
                  <span className="text-color">عرض</span>
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                  رصيد المسودات ( مبيعات ) :
                </span>
                <span className="d-block text-custom text-lighter">
                  0 - <span className="text-color">عرض</span>
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                  الرصيد المستحق ( مشتريات ) :
                </span>
                <span
                  className="d-block text-custom"
                  style={{ color: "#98EC2D" }}
                >
                  358.821.69
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="div-bg my-3">
          <h5 className="text-lighter text-md mb-4">طلبات الإيجارات</h5>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                 طلبات الإيجارات
                </span>
                <span className="d-block text-custom text-lighter">0</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                 مشاريع الإيجارات :
                </span>
                <span className="d-block text-custom text-lighter">1</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                عقود الإيجارات :
                </span>
                <span className="d-block text-custom text-lighter">0</span>
              </div>
            </div>
          </div>
        </div>
        <div className="div-bg my-3">
          <h5 className="text-lighter text-md mb-4">الفواتير</h5>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                 إصدار مشتريات رحلات مجمعة :
                </span>
                <span className="d-block text-custom text-color">إصدار</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                 إصدار مبيعات إيجارات مجمعة :
                </span>
                <span className="d-block text-custom text-color">إصدار</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                إصدار مشتريات إيجارات مجمعة :
                </span>
                <span className="d-block text-custom text-color">إصدار</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                إصدار مبيعات داخلية يدوية :
                </span>
                <span className="d-block text-custom text-color">إصدار</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                إصدار مشتريات داخلية يدوية :
                </span>
                <span className="d-block text-custom text-color">إصدار</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                إجمالي المبيعات الداخلية :
                </span>
                <span className="d-block text-custom text-color">0</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                المبيعات الداخلية المستحقة :
                </span>
                <span className="d-block text-custom text-color">0</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                المبيعات الداخلية الغير المستحقة :
                </span>
                <span className="d-block text-custom text-color">0</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                المبيعات الداخلية المسودة :
                </span>
                <span className="d-block text-custom text-color">0</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                إجمالي المشتريات الداخلية :
                </span>
                <span className="d-block text-custom text-color">1</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                المشتريات الداخلية المستحقة :
                </span>
                <span className="d-block text-custom text-color">1</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                المشتريات الداخلية الغير المستحقة :
                </span>
                <span className="d-block text-custom text-color">0</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                المشتريات الداخلية المسودة :
                </span>
                <span className="d-block text-custom text-color">0</span>
              </div>
            </div>
          </div>
        </div>
        <div className="div-bg my-3">
          <h5 className="text-lighter text-md mb-4">سندات داخلية</h5>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                 إصدار سند قبض :
                </span>
                <span className="d-block text-custom text-color">إصدار</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                 إصدار سند صرف :
                </span>
                <span className="d-block text-custom text-color">إصدار</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                 سندات القبض :
                </span>
                <span className="d-block text-custom text-lighter">0</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                 سندات الصرف :
                </span>
                <span className="d-block text-custom text-lighter">1</span>
              </div>
            </div>
          </div>
        </div>
        <div className="div-bg my-3">
          <h5 className="text-lighter text-md mb-4">تقارير محاسبية</h5>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                 إصدار كشف حساب عميل :
                </span>
                <span className="d-block text-custom text-lighter">0</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                 إصدار كشف حساب إداري :
                </span>
                <span className="d-block text-custom text-lighter">1</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="input-bg my-2 px-3 py-2 rounded border-lighter d-flex justify-content-between align-items-center">
                <span className="d-block text-custom text-lighter">
                 رصيد العميل :
                </span>
                <span className="d-block text-custom text-lighter">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBranch;
