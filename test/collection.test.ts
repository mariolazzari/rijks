import { describe, expect, it } from "vitest";
import { rijks, page, perPage, apiError } from "./global";

describe("Collection API", async () => {
  const res = await rijks.getCollection({
    searchTerm: "Rembrandt",
    page,
    perPage,
  });

  it("should return Rembrandt's works", () => {
    expect(res.success).toBeTruthy();
    expect(res.error).toBeUndefined();
    expect(res.data?.artObjects.length).toBeGreaterThan(0);
  });

  it("should find 'The night watch'", () => {
    const nightWatch = res.data?.artObjects.find(a =>
      a.title.toLocaleLowerCase().includes("night")
    );

    expect(nightWatch).toBeDefined();
  });

  it(`should return ${perPage} results`, () => {
    expect(res.data?.artObjects.length).toEqual(perPage);
  });

  it("should return an Unauthorized error", async () => {
    const res = await apiError.getCollection({
      searchTerm: "error",
      page,
      perPage,
    });

    expect(res.success).toBeFalsy();
    expect(res.status).toEqual(401);
    expect(res.data).toBeUndefined();
    expect(res.error).toEqual("Unauthorized");
  });
});
