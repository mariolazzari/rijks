import dotenv from "dotenv";
import Rijks from "../src/Rijks";

dotenv.config();
const { VITE_API_KEY } = process.env;

const rijks = new Rijks(VITE_API_KEY!);
const page = 1;
const perPage = 10;

export { rijks, page, perPage };
export default rijks;
