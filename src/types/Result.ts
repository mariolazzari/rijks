import { Response } from "./Response";

export type Result<T extends Response> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };
