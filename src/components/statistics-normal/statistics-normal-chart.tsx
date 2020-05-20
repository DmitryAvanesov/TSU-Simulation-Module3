import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { StatisticsDiscreteResult } from "../statistics-discrete/statistics-discrete-result";

const Div = styled.div`
  display: inline-block;
`;

interface IState {
  statistics: {
    numberOfProbabilities: number,
    probabilities: Array<number>,
    result: Array<number>
  }
}

interface IData {
  name: string,
  real: number,
  approximate: number
}

export const StatisticsNormalChart = () => {
  const probabilities = useSelector((state: IState) => state.statistics.probabilities);
  const result = useSelector((state: IState) => state.statistics.result);
  const numberOfProbabilities = useSelector((state: IState) => state.statistics.numberOfProbabilities);
  const data = new Array<IData>(numberOfProbabilities);

  for (let i = 0; i < numberOfProbabilities; i++) {
    data[i] = {
      name: `Event ${i} (%)`,
      real: probabilities[i],
      approximate: result[i]
    };
  }

  const chart = (
    <BarChart
      width={700}
      height={350}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='real' fill="#8884d8" />
      <Bar dataKey='approximate' fill="#82ca9d" />
    </BarChart>
  );

  return (
    <Div>
      {chart}
      <StatisticsDiscreteResult />
    </Div>
  );
}