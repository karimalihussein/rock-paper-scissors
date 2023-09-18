import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HandSelection from "../components/HandSelection";
import { FaRegHandPaper } from "react-icons/fa";

describe("Hand Selection", () => {
    it("should render the hand selection component with the right props", () => {
        render(<HandSelection name="paper" icon={<FaRegHandPaper data-testid="paper" />} handChoiceIndex={2} />);
        const handSelection = screen.getByText("paper");
        expect(handSelection).toBeTruthy();
        const handIcon = screen.getByTestId("paper");
        expect(handIcon).toBeTruthy();
    });

    it("should render the active hand selection component with the right props", () => {
    });
});
