import React from "react";
import { data,datas } from "./data";
import { ChartStyle } from "./style";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Chart = ({countryInfo}) => {
  const {country_eng_nm, gdp, gdp_per_capita ,import_amount, export_amount} = countryInfo
  const data1 = [
    {name : '총 GDP' , values : gdp/100000000},
    {name : '1인당 GDP' , values : Number(gdp_per_capita)},
    {name : '총 수출액' , values :export_amount/10000000},
    {name : '총 수입액' , values : import_amount/10000000},
  ]
 
  const data2 = [
    {name : '총 GDP' , values : 0},
    {name : '1인당 GDP' , values : 0},
    {name : '총 수출액' , values : 0 },
    {name : '총 수입액' , values : 0},
]

  console.log(data1)

  return (
    <contanier>
        <ChartStyle>
        <h1>{country_eng_nm}</h1>
            <div className="chartBar">
            <BarChart
            width={500}
            height={300}
            data={data1}
            barSize={20}
            >
            <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="values" fill="#8884d8" background={{ fill: "#eee" }} />
            </BarChart>
            </div>
        </ChartStyle>
    </contanier>
  );
};

export default Chart;