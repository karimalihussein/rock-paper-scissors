import { describe, expect, it } from "vitest";
import { generateRandomIndex } from "../utils/generateRandomIndex";

describe("Generate Random Index", () => {
    it("should generate a random index between 0 and 2", () => {
        const randomIndex = generateRandomIndex();
        expect(randomIndex).toBeLessThanOrEqual(2);
        expect(randomIndex).toBeGreaterThanOrEqual(0);
    });
});



