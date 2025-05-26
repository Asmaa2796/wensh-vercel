import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
  render() {
    const options = {
      animationEnabled: true,
      backgroundColor: "#0f1535",
      title: {
        text: "",
        fontColor: "#fff",
      },
      subtitles: [
        {
          text: "68% إجمالي طلبات الرحلات",
          verticalAlign: "center",
          fontSize: 16,
          fontColor: "#fff",
          fontFamily: "Montserrat, sans-serif",
          dockInsidePlotArea: true,
          maxWidth: 150, // simulate width control
          wrap: true
        },
      ],
      data: [
        {
          type: "doughnut",
          radius: "90%", // <-- Add this to enlarge the doughnut size
          innerRadius: "70%", // optional: controls doughnut hole size
          showInLegend: false,
          indexLabelFontColor: "#fff",

          indexLabel: "", //{name}: {y}
          yValueFormatString: "#,###'%'",
          dataPoints: [
            { name: "تحت الخدمة", y: 68, color: "#3494E6"},
            { name: "مكتمل", y: 25, color: "#FF6A00" },
            { name: "ملغي", y: 14, color: "#17AD37" }
          ],
        },
      ],
    };

    return (
      <div style={{ width: "100%", height: "400px" }}>
        <CanvasJSChart
          options={options}
          containerProps={{ width: "100%", height: "100%" }}
        />
      </div>
    );
  }
}

export default App;