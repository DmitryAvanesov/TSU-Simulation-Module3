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
    pointsNormal: Array<number>,
    resultNormalReal: Array<number>,
    resultNormalApproximate: Array<Array<number>>
  }
}

interface IProps {
  index: number
}

interface IData {
  name: string,
  real: number,
  approximate: number
}

export const StatisticsNormalChart = (props: IProps) => {
  const pointsNormal = useSelector((state: IState) => state.statistics.pointsNormal);
  const resultNormalReal = useSelector((state: IState) => state.statistics.resultNormalReal);
  const resultNormalApproximate = useSelector((state: IState) => state.statistics.resultNormalApproximate);
  const data = new Array<IData>();

  pointsNormal.forEach((value, index) => {
    data.push({
      name: value.toFixed(2),
      real: resultNormalReal[index],
      approximate: resultNormalApproximate[props.index][index]
    });
  });

  const chart = (
    <ComposedChart
      width={350}
      height={300}
      data={data}
      barCategoryGap={0}
      margin={{
        top: 20, right: 20, bottom: 20, left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="approximate" fill="#82ca9d" />
      <Line type="monotone" dataKey="real" stroke="#413ea0" dot={false} />
    </ComposedChart>
  );

  return (
    <Div>
      {chart}
      <StatisticsDiscreteResult />
    </Div>
  );
}