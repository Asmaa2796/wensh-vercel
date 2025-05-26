import React from "react";

const CircleChart = () => {
  return (
    <div className="circle_chart">
      <div className="row">
        <div className="col-lx-4 col-lg-4 col-md-6 col-12">
          <div className="chart-text border-0">
            <div>
              <svg
                width="60px" // let SVG fill container width
                height="60px" // keep aspect ratio
                viewBox="0 0 42 42"
                className="pie"
                aria-labelledby="css-pie-chart"
                role="img"
              >
                <circle
                  className="donut-hole"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="#0F1535"
                />
                <circle
                  className="donut-ring"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="#1A203E"
                  strokeWidth="3"
                />
                <circle
                  className="donut-segment"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="#FFD200"
                  strokeWidth="3"
                  strokeDasharray="75 25"
                  strokeDashoffset="25"
                />
                <g className="chart-text"></g>
              </svg>
            </div>
            <div>
              <b className="text-lighter">العملاء الأفراد</b>
              <h5 className="text-lighter">65,127</h5>
            </div>
          </div>
        </div>
        <div className="col-lx-4 col-lg-4 col-md-6 col-12">
          <div className="chart-text">
            <div>
              <svg
                width="60px" // let SVG fill container width
                height="60px" // keep aspect ratio
                viewBox="0 0 42 42"
                className="pie"
                aria-labelledby="css-pie-chart"
                role="img"
              >
                <circle
                  className="donut-hole"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="#0F1535"
                />
                <circle
                  className="donut-ring"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="#1A203E"
                  strokeWidth="3"
                />
                <circle
                  className="donut-segment"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="#00C6FB"
                  strokeWidth="3"
                  strokeDasharray="75 25"
                  strokeDashoffset="25"
                />
                <g className="chart-text"></g>
              </svg>
            </div>
            <div>
              <b className="text-lighter">العملاء الأفراد</b>
              <h5 className="text-lighter">65,127</h5>
            </div>
          </div>
        </div>
        <div className="col-lx-4 col-lg-4 col-md-6 col-12">
          <div className="chart-text">
            <div>
              <svg
                width="60px" // let SVG fill container width
                height="60px" // keep aspect ratio
                viewBox="0 0 42 42"
                className="pie"
                aria-labelledby="css-pie-chart"
                role="img"
              >
                <circle
                  className="donut-hole"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="#0F1535"
                />
                <circle
                  className="donut-ring"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="#1A203E"
                  strokeWidth="3"
                />
                <circle
                  className="donut-segment"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="#F2205B"
                  strokeWidth="3"
                  strokeDasharray="75 25"
                  strokeDashoffset="25"
                />
                <g className="chart-text"></g>
              </svg>
            </div>
            <div>
              <b className="text-lighter">العملاء الأفراد</b>
              <h5 className="text-lighter">65,127</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleChart;