import React from "react";
import "./App.css";
import { data } from "./data";
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

const Chart = () => {
  return (
    <contanier>
        <ChartStyle>
        <h1>World Economic Situation</h1>
            <div className="chartBar">
            <BarChart
            width={500}
            height={300}
            data={data}
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