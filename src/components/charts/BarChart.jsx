import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "يناير", stat1: 20, stat2: 30, stat3: 10 },
  { name: "فبراير", stat1: 20, stat2: 30, stat3: 40 },
  { name: "مارس", stat1: 20, stat2: 50, stat3: 40 },
  { name: "أبريل", stat1: 20, stat2: 3, stat3: 10 },
  { name: "مايو", stat1: 20, stat2: 10, stat3: 20 },
];

const CustomBarChart = () => {
  return (
    <div style={{ backgroundColor: "#0f1535"}}>
      {/* <h3 style={{ color: "#fff", textAlign: "center" }}>المبيعات الفصلية حسب الإحصائيات</h3> */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#0D6EFD1A" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip contentStyle={{ backgroundColor: "#0f1535", border: "none", color: "#fff",fontSize:"11px" }} />
          <Legend wrapperStyle={{ color: "#fff" }} />
          <Bar dataKey="stat1" fill="#FFD200" radius={[10, 10, 0, 0]} name="إحصائية 1" label={{ fontSize: "12px" }} />
          <Bar dataKey="stat2" fill="#00C6FB" radius={[10, 10, 0, 0]} name="إحصائية 2" label={{ fontSize: "12px" }} />
          <Bar dataKey="stat3" fill="#F2205B" radius={[10, 10, 0, 0]} name="إحصائية 3" label={{ fontSize: "12px" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
