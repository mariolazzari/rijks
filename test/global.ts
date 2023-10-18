import dotenv from "dotenv";
import { Rijks } from "../src/Rijks";

// enviroment
dotenv.config();
const { VITE_API_KEY } = process.env;

// api call defaults
export const rijks = new Rijks(VITE_API_KEY!);
export const page = 1;
export const perPage = 10;
