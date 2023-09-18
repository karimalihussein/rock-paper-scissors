import React from "react";

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
}

export interface Props {
  children: React.ReactNode;
}
