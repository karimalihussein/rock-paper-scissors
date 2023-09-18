import React from "react";
import { ActionTypes } from "../reducers/scoreReducerTypes";

export enum HandOptions {
  Rock = "rock",
  Paper = "paper",
  Scissors = "scissors",
}

export interface IOptions {
  name: HandOptions;
  icon: JSX.Element;
}

export interface IOptionsContextTypes {
  options: IOptions[];
  state: IInitialState;
  dispatch: React.Dispatch<ActionTypes>;
}

export interface Props {
  children: React.ReactNode;
}

interface IScore {
  player: number,
  computer: number
}

interface IResults {
  winner: string,
  message: string
}

export interface IInitialState {
  playerHand: number;
  computerHand: number;
  runTimer: boolean;
  score: IScore;
  results: IResults;
}
