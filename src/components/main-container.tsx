import React from "react";
import styled from "styled-components";
import { YesOrNoContainer } from "./yes-or-no/yes-or-no-container";
import { Link, Switch, Route } from "react-router-dom";
import { TargetContainer } from "./target/target-container";

const Div = styled.div`
  width: 250px;
  height: 100px;
  line-height: 100px;
  background-color: black;
  color: white;
  font-size: 26px;
  font-family: sans-serif;
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
            <Div>Yes or no? (8.1)</Div>
          </Link>
          <Link to='/target'>
           <Div>Target (8.2)</Div>
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