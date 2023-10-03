import { describe, it, expect } from "vitest";
import dotenv from "dotenv";
import Rijks from "../src/Rijks";

dotenv.config();
const { API_KEY } = process.env;

const rijks = new Rijks(API_KEY!);

describe("Collection Image API", async () => {
  const res = await rijks.getCollectionImage({
    objectNumber: "SK-C-5",
  });

  it("should return 'The night watch' images", () => {
    expect(res.success).true;
    expect(res.error).undefined;
    expect(res.data?.levels.length).gt(0);
  });
});
