import { ResultType } from "../types/ResultType";

export interface Result<T extends ResultType> {
  success: boolean;
  status: number;
  data?: T;
  error?: string;
}
