import React from "react";
import { YesOrNoQuestion } from "./yes-or-no-question"
import { YesOrNoButton } from "./yes-or-no-button";
import { YesOrNoResult } from "./yes-or-no-result";
import styled from "styled-components";
import { YesOrNoContainer } from "./yes-or-no-container";
import { Link, Switch, Route } from "react-router-dom";

const DivContainer = styled.div`
  position: relative;
`;

export const MainContainer = () => {
  return (
    <DivContainer>
      <Switch>
        <Route exact path='/'>
          <Link to='/yes_or_no'>Yes or no?</Link>
        </Route>   
        <Route exact path='/yes_or_no'>
          <YesOrNoContainer />
        </Route>
      </Switch>
    </DivContainer>
  );
}