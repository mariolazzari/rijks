import { describe, it, expect } from "vitest";
import dotenv from "dotenv";
import Rijks from "../src/Rijks";

dotenv.config();
const { API_KEY } = process.env;

const rijks = new Rijks(API_KEY!);

describe("Collection Details API", async () => {
  const res = await rijks.getCollectionDetails({
    objectNumber: "SK-C-5",
    format: "json",
  });

  it("should return 'The night watch' details", () => {
    expect(res.success).true;
    expect(res.error).undefined;

    console.log("res", res);
  });
});
