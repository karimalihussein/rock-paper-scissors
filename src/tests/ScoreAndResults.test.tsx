import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ScoreAndResults from "../components/Scores/ScoreAndResults";
import { OptionsContextProvider } from "../context/optionsContext";
import ChooseAndPlay from "../components/Play/ChooseAndPlay";

describe("ScoreAndResults", () => {
    it("should display 2 seconds on the screen after we wait 1 second", () => {
       vi.useFakeTimers();
        render(
            <OptionsContextProvider>
                <ScoreAndResults />
                <ChooseAndPlay />
            </OptionsContextProvider>
        );
        const hand = screen.getByText(/paper/i);
        expect(hand).toBeTruthy();

        fireEvent.click(hand);
        fireEvent.click(screen.getByText('Play'));
        
        act(() => {
            vi.advanceTimersByTime(2000);
        });

        screen.debug();

        expect(screen.getByText(/1/i)).toBeTruthy();


    });
});