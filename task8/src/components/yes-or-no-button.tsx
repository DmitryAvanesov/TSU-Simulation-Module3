import React from "react";
import { useDispatch } from "react-redux";
import { clickYesOrNoButton } from "../redux/actions";

export const YesOrNoButton = () => {
  const dispatch = useDispatch();

  return (
    <button className="yes-or-no-button" onClick={() => dispatch(clickYesOrNoButton())}>
      Find out
    </button>
  );
}