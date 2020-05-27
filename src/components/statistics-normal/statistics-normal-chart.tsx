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
    resultNormalApproximate: Array<Array<number>>,
    averageNormalApproximate: Array<number>,
    varianceNormalApproximate: Array<number>,
    averageNormalError: Array<number>,
    varianceNormalError: Array<number>,
    chiSquareNormal: Array<number>,
    chiSquareTableValue: number,
    duration: Array<number>
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
  const averageNormalApproximate = useSelector((state: IState) => state.statistics.averageNormalApproximate[props.index]);
  const varianceNormalApproximate = useSelector((state: IState) => state.statistics.varianceNormalApproximate[props.index]);
  const averageNormalError = useSelector((state: IState) => state.statistics.averageNormalError[props.index]);
  const varianceNormalError = useSelector((state: IState) => state.statistics.varianceNormalError[props.index]);
  const chiSquareNormal = useSelector((state: IState) => state.statistics.chiSquareNormal[props.index]);
  const chiSquareTableValue = useSelector((state: IState) => state.statistics.chiSquareTableValue);
  const duration = useSelector((state: IState) => state.statistics.duration[props.index]);
 
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
        top: 20, right: 20, bottom: 20, left: 0
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
      <div>Method {props.index}</div>
      <br />
      {chart}
      <div>
        <b>Approximate average: {parseFloat(averageNormalApproximate.toFixed(2))}</b> (error = {parseFloat(averageNormalError.toFixed(2))})
      </div>
      <div>
        <b>Approximate variance: {parseFloat(varianceNormalApproximate.toFixed(2))}</b> (error = {parseFloat(varianceNormalError.toFixed(2))})
      </div>
      <div>
        Chi-square: {parseFloat(chiSquareNormal.toFixed(2))} &gt; {chiSquareTableValue} is <b>{chiSquareNormal > chiSquareTableValue ? 'true' : 'false'}</b>
      </div>
      <br />
      <div>
        <b>Duration:</b> {parseFloat(duration.toFixed(2))}ms
      </div>
    </Div>
  );
}