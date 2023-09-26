import { IInitialState } from "../context/OptionsContextTypes";
import { ActionTypes, OptionActionKind } from "./scoreReducerTypes";

export default function scoreReducer(state: IInitialState, action: ActionTypes) {
    const { type, payload } = action;
    switch (type) {
        case OptionActionKind.UPDATE_PLAYER_CHOICE:
            return { ...state, playerHand: payload };
        case OptionActionKind.UPDATE_COMPUTER_CHOICE:
            return { ...state, computerHand: payload };
        case OptionActionKind.RUN_TIMER:
            return { ...state, runTimer: payload };
        case OptionActionKind.DRAW:
            return { ...state, results: { 'winner': 'No One', 'message': 'draw' } };
        case OptionActionKind.PLAYER_WIN:
            return {
                ...state, score: {
                    ...state.score,
                    player: state.score.player + 1
                }, results: { 'winner': 'Player', 'message': 'player wins' }
            };
        case OptionActionKind.COMPUTER_WIN:
            return {
                ...state, score: {
                    ...state.score,
                    computer: state.score.computer + 1
                }, results: { 'winner': 'Computer', 'message': 'computer wins' }
            };
    }
    return { ...state, results: { 'winner': 'error', 'message': 'we have an error' } };
}
