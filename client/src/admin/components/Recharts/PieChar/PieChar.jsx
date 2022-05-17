import React, { PureComponent } from "react";
import './PieChar.scss'
import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { getAllProducts } from "../../../../redux/reducer/products";

export const PieChar = () => {
  let data1 = useSelector(getAllProducts);
  console.log(data1);

  let bellezaArray = data1.filter((e) => e.category === "Belleza");
  // console.log(bellezaArray.length);
  let deporteArray = data1.filter((e) => e.category === "Deporte");
  // console.log(deporteArray.length);
  let MascotaArray = data1.filter((e) => e.category === "Mascosta");
  // console.log(MascotaArray.length);
  let electronicaArray = data1.filter((e) => e.category === "Electronica");
  // console.log(electronicaArray.length);

  const data = [
    { name: "Belleza", value: bellezaArray.length },
    { name: "Deporte", value: deporteArray.length },
    { name: "Mascota", value: MascotaArray.length },
    { name: "Electronica", value: electronicaArray.length },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    value,
  }) => {
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {/* {`${(percent * 100).toFixed(0)}%`} */}
        {data[index].name} ({value})
      </text>
    );
  };

  return (
    <>
      <div className="container_piechart">
      <h4>Catidad de productos vs categoria</h4>
      <ResponsiveContainer>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            // labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      </div>
    </>
  );
};
