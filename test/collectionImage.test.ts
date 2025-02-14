import { describe, it, expect } from "vitest";
import { rijks } from "./global";

describe("Collection Image API", async () => {
  const res = await rijks.getCollectionImage({
    objectNumber: "SK-C-5",
  });

  it("should return 'The night watch' images", () => {
    expect(res.success).toBeTruthy();
    if (res.success) {
      expect(res.data.levels.length).greaterThan(0);
    } else {
      expect(res.error).toBeDefined();
    }
  });
});
