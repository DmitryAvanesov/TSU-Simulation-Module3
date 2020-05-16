import React from "react";
import styled from "styled-components";
import { YesOrNoContainer } from "./yes-or-no/yes-or-no-container";
import { Link, Switch, Route } from "react-router-dom";
import { TargetContainer } from "./target/target-container";
import { StatisticsContainer } from "./statistics/statistics-container";
import { DiceContainer } from "./dice/dice-container";
import { StatsCharacteristicsContainer } from "./stats-characteristics/stats-characteristics-container";

const Div = styled.div`
  width: 275px;
  height: 75px;
  line-height: 75px;
  font-size: 20px;
  font-family: sans-serif;
  text-align: center;
  display: inline-block;
  margin: 20px;
  font-weight: bold;
  color: black;
  border: 5px solid DarkBlue;
`;

export const MainContainer = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Link to='/yes-or-no'>
            <Div>Yes or no? (8.1)</Div>
          </Link>
          <Link to='/target'>
            <Div>Target (8.2)</Div>
          </Link>
          <Link to='/statistics'>
            <Div>Statistics (9)</Div>
          </Link>
          <Link to='/dice'>
            <Div>Dice (10)</Div>
          </Link>
          <Link to='/stats-characteristics'>
            <Div>Stats characteristics (11)</Div>
          </Link>
        </Route>

        <Route exact path='/yes-or-no'>
          <YesOrNoContainer />
        </Route>
        <Route exact path='/target'>
          <TargetContainer />
        </Route>
        <Route exact path='/statistics'>
          <StatisticsContainer />
        </Route>
        <Route exact path='/dice'>
          <DiceContainer />
        </Route>
        <Route exact path='/stats-characteristics'>
          <StatsCharacteristicsContainer />
        </Route>
      </Switch>
    </>
  );
}