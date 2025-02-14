import { describe, expect, it } from "vitest";
import { rijks, perPage, apiError } from "./global";

describe("Collection API", async () => {
  const res = await rijks.getCollection({
    searchTerm: "Rembrandt",
    sort: "relevance",
    topPieces: true,
  });

  it("should return Rembrandt's top pieces sorted by relevance", () => {
    expect(res.success).toBeTruthy();
    if (res.success) {
      expect(res.data?.artObjects.length).toBe(perPage);
    } else {
      expect(res.error).toBeDefined();
    }
  });

  it("should find 'The night watch'", () => {
    const search = "Night";
    if (res.success) {
      const nightWatch = res.data.artObjects.find(a =>
        a.title.includes(search)
      );
      expect(nightWatch).toBeDefined();
      expect(nightWatch).toBeTypeOf("object");
      expect(nightWatch?.longTitle.includes(search)).toBeTruthy();
    }
  });

  it("should return an Unauthorized error", async () => {
    const res = await apiError.getCollection({
      searchTerm: "error",
    });

    expect(res.success).toBeFalsy();
    if (!res.success) {
      expect(res.error).toEqual("Unauthorized");
    }
  });
});
