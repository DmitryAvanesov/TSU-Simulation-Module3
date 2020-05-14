import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeStatisticsAmount } from "../../redux/actions";

export const StatisticsAmount = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <select onChange={e => dispatch(changeStatisticsAmount(parseInt(e.target.value)))}>
        <option value={10}>10</option>
        <option value={100}>100</option>
        <option value={1000}>1000</option>
        <option value={10000}>10000</option>
      </select>
      <span>events</span>
    </div>
  );
}