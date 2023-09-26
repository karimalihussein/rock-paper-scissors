import { Dispatch } from "react";
import { ActionTypes, OptionActionKind } from "../reducers/scoreReducerTypes";

type Hand = "rock" | "paper" | "scissors";

const WINNING_HANDS: Record<Hand, Hand> = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

export const checkWinner = (
    dispatch: Dispatch<ActionTypes>,
    playerHand: Hand,
    computerHand: Hand
) => {
    if (playerHand === computerHand) {
        dispatch({ type: OptionActionKind.DRAW, payload: "It's a draw!" });
    } else if (WINNING_HANDS[playerHand] === computerHand) {
        dispatch({ type: OptionActionKind.PLAYER_WIN, payload: "You win!" });
    } else {
        dispatch({ type: OptionActionKind.COMPUTER_WIN, payload: "You lose!" });
    }
};

