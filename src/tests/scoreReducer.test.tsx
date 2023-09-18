import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import scoreReducer from "../reducers/scoreReducer";
import { useEffect, useReducer } from "react";
import { initialState } from "../context/initialContextValues";
import { ActionTypes, OptionActionKind } from "../reducers/scoreReducerTypes";


vi.mock('../context/initialContextValues', () => {
    return {
        initialState: {
            playerHand: 2,
            computerHand: 0,
            runTimer: false,
            score: {
                player: 0,
                computer: 0,
            },
            results: {
                winner: "",
                message: "",
            },
        }
    }
});

interface IProps {
    myAction: ActionTypes
}

const TestingComponent = (props: IProps) => {
    const [state, dispatch] = useReducer(scoreReducer, initialState);
    useEffect(() => {
        dispatch(props.myAction);
    }, []);
    return (
        <>
            <p>playerhand: {state.playerHand}</p>
        </>
    )
}

describe("TestingComponent", () => {
    it("should render playerhand with the correct text", () => {
        render(<TestingComponent myAction={{ type: OptionActionKind.UPDATE_PLAYER_CHOICE, payload: 0 }} />);
        expect(screen.getByText("playerhand: 0")).toBeTruthy();
    });
});
