import React from "react";
import styled from "styled-components";
import { YesOrNoContainer } from "./yes-or-no-container";
import { Link, Switch, Route } from "react-router-dom";
import { TargetContainer } from "./target-container";

const Div = styled.div`
  width: 200px;
  height: 75px;
  background-color: black;
  color: white;
  font-size: 26px;
  font-family: sans-serif;
  line-height: 75px;
  text-align: center;
  display: inline-block;
  margin: 20px;
  border-radius: 5%;
`;

export const MainContainer = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Link to='/yes_or_no'>
            <Div>Yes or no?</Div>
          </Link>
          <Link to='/target'>
           <Div>Target</Div>
          </Link>
        </Route>   
        <Route exact path='/yes_or_no'>
          <YesOrNoContainer />
        </Route>
        <Route exact path='/target'>
          <TargetContainer />
        </Route>
      </Switch>
    </>
  );
}