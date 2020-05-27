import React from "react";
import styled from "styled-components";
import { YesOrNoContainer } from "./yes-or-no/yes-or-no-container";
import { Link, Switch, Route } from "react-router-dom";
import { TargetContainer } from "./target/target-container";
import { StatisticsContainer } from "./statistics/statistics-container";
import { DiceContainer } from "./dice/dice-container";
import { StatisticsDiscreteContainer } from "./statistics-discrete/statistics-discrete-container";
import { FootballContainer } from "./football/football-container";
import { StatisticsInfiniteContainer } from "./statistics-infinite/statistics-infinite-container";
import { StatisticsNormalContainer } from "./statistics-normal/statistics-normal-container";

const DivButton = styled.div`
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

const DivContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');  

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;

  & * {
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
  }

  & > *, & > div > * {
    margin: 0 auto 25px auto;
  }
`;

export const MainContainer = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Link to='/yes-or-no'>
            <DivButton>Yes or no? (8.1)</DivButton>
          </Link>
          <Link to='/target'>
            <DivButton>Target (8.2)</DivButton>
          </Link>
          <Link to='/statistics'>
            <DivButton>Statistics (9)</DivButton>
          </Link>
          <Link to='/dice'>
            <DivButton>Dice (10)</DivButton>
          </Link>
          <Link to='/statistics-discrete'>
            <DivButton>Statistics: discrete (11)</DivButton>
          </Link>
          <Link to='/football'>
            <DivButton>Football (12)</DivButton>
          </Link>
          <Link to='/statistics-infinite'>
            <DivButton>Statistics: infinite (13)</DivButton>
          </Link>
          <Link to='/statistics-normal'>
            <DivButton>Statistics: normal (14)</DivButton>
          </Link>
        </Route>

        <Route exact path='/yes-or-no'>
          <DivContainer>
            <YesOrNoContainer />
          </DivContainer>
        </Route>
        <Route exact path='/target'>
          <DivContainer>
            <TargetContainer />
          </DivContainer>
        </Route>
        <Route exact path='/statistics'>
          <DivContainer>
            <StatisticsContainer />
          </DivContainer>
        </Route>
        <Route exact path='/dice'>
          <DivContainer>
            <DiceContainer />
          </DivContainer>
        </Route>
        <Route exact path='/statistics-discrete'>
          <DivContainer>
            <StatisticsDiscreteContainer />
          </DivContainer>
        </Route>
        <Route exact path='/football'>
          <DivContainer>
            <FootballContainer />
          </DivContainer>
        </Route>
        <Route exact path='/statistics-infinite'>
          <DivContainer>
            <StatisticsInfiniteContainer />
          </DivContainer>
        </Route>
        <Route exact path='/statistics-normal'>
          <DivContainer>
            <StatisticsNormalContainer />
          </DivContainer>
        </Route>
      </Switch>
    </>
  );
}