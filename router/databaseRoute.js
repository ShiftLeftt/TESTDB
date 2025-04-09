import mysql from "mysql2/promise";
// import { Pool } from "undici-types";
// const router = express.Router();

const pool = mysql.createPool({
  host: "192.168.100.74",
  user: "poop",
  password: "poop123",
  database: "traveldb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
