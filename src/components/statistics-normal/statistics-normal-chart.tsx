import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ComposedChart, Line } from 'recharts';
import { StatisticsDiscreteResult } from "../statistics-discrete/statistics-discrete-result";

const Div = styled.div`
  display: inline-block;

  && * {
    font-size: 14px;
  }
`;

interface IState {
  statistics: {
    resultNormal: Array<Array<Array<number>>>
  }
}

interface IProps {
  index: number
}

interface IData {
  name: string,
  value: number
}

export const StatisticsNormalChart = (props: IProps) => {
  const resultNormal = useSelector((state: IState) => state.statistics.resultNormal[props.index]);
  const data = new Array<IData>();

  resultNormal.forEach((value: Array<number>) => {
    data.push({
      name: value[0].toFixed(2),
      value: value[1]
    });
  });

  const chart = (
    <ComposedChart
      width={350}
      height={300}
      data={data}
      margin={{
        top: 20, right: 20, bottom: 20, left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#ff7300" />
    </ComposedChart>
  );

  return (
    <Div>
      {chart}
      <StatisticsDiscreteResult />
    </Div>
  );
}