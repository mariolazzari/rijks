import { describe, it, expect } from "vitest";
import dotenv from "dotenv";
import Rijks from "../src/Rijks";

dotenv.config();
const { API_KEY } = process.env;

const rijks = new Rijks(API_KEY!);

describe("Collection API", async () => {
  const res = await rijks.search({ searchTerm: "Rembrandt" });

  it("should return Rembrandt's works", () => {
    expect(res.success).true;
    expect(res.error).undefined;
    expect(res.data?.artObjects.length).gt(0);
  });

  it("should find 'The night watch'", () => {
    const nightWatch = res.data?.artObjects.find(a =>
      a.title.toLocaleLowerCase().includes("night")
    );

    expect(nightWatch).toBeDefined;
  });
});
