import { describe, it, expect } from "vitest";
import rijks from "./global";

describe("Collection Image API", async () => {
  const res = await rijks.getCollectionImage({
    objectNumber: "SK-C-5",
  });

  it("should return 'The night watch' images", () => {
    expect(res.success).toBeTruthy();
    expect(res.error).toBeUndefined();
    expect(res.data?.levels.length).greaterThan(0);
  });
});
