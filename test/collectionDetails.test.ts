import { describe, it, expect } from "vitest";
import rijks from "./global";

describe("Collection Details API", async () => {
  const res = await rijks.getCollectionDetails({
    objectNumber: "SK-C-5",
    format: "json",
  });

  it("should return 'The night watch' details", () => {
    expect(res.success).toBeTruthy();
    expect(res.error).toBeUndefined();
  });
});
