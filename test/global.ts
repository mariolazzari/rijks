import dotenv from "dotenv";
import Rijks from "../src/Rijks";

dotenv.config();
const { VITE_API_KEY } = process.env;

const rijks = new Rijks(VITE_API_KEY!);

export default rijks;
