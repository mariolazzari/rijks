import { Response } from "../types/Response";

export interface Result<T extends Response> {
  success: boolean;
  status: number;
  data?: T;
  error?: string;
}
