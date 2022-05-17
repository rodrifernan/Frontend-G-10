import React, { PureComponent } from "react";
import { useSelector } from "react-redux";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import { getAllProducts } from "../../../../redux/reducer/products";

export const RadarChar = () => {
  let data1 = useSelector(getAllProducts);

  let bellezaArray = data1
    .filter((e) => e.category === "Belleza")
    .map((e) => e.stock);
  let sumStockBelleza = bellezaArray.reduce(
    (pvalue, current) => pvalue + current,
    0
  );
  // console.log(bellezaArray);
  // console.log(sumStockBelleza);
  let deporteArray = data1
    .filter((e) => e.category === "Deporte")
    .map((e) => e.stock);
  let sumStockDeporte = deporteArray.reduce(
    (pvalue, current) => pvalue + current,
    0
  );
  // console.log(deporteArray.length);
  let MascotaArray = data1
    .filter((e) => e.category === "Mascosta")
    .map((e) => e.stock);
  let sumStockMascosta = MascotaArray.reduce(
    (pvalue, current) => pvalue + current,
    0
  );
  // console.log(MascotaArray.length);
  let electronicaArray = data1
    .filter((e) => e.category === "Electronica")
    .map((e) => e.stock);
  let sumStockElectronica = electronicaArray.reduce(
    (pvalue, current) => pvalue + current,
    0
  );
  // console.log(electronicaArray.length);
  const arrayCategorias = [
    sumStockBelleza,
    sumStockDeporte,
    sumStockMascosta,
    sumStockElectronica,
  ];
  // console.log(arrayCategorias);
  let mayorStockCategoria = Math.max(arrayCategorias);

  const data = [
    {
      subject: "Belleza",
      A: sumStockBelleza,

      fullMark: mayorStockCategoria,
    },
    {
      subject: "Deporte",
      A: sumStockDeporte,

      fullMark: mayorStockCategoria,
    },
    {
      subject: "Electronica",
      A: sumStockMascosta,

      fullMark: mayorStockCategoria,
    },
    {
      subject: "Mascota",
      A: sumStockElectronica,

      fullMark: mayorStockCategoria,
    },
  ];

  return (
    <>
      <h4>Stock de productos vs categoria</h4>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
};
