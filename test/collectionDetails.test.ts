import { describe, it, expect } from "vitest";
import { rijks } from "./global";

const objectNumber = "SK-C-5";

describe("Collection Details API", async () => {
  const res = await rijks.getCollectionDetails({
    objectNumber,
  });

  it("should return 'The night watch' details", () => {
    // success state
    expect(res.success).toBeTruthy();
    expect(res.status).toEqual(200);

    // collection details
    expect(res.data?.artObjectPage.objectNumber).toBe(objectNumber);
    expect(res.data?.artObjectPage.plaqueDescription).toBeDefined();

    // no errors
    expect(res.error).toBeUndefined();
  });
});
