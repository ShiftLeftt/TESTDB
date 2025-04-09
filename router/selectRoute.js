import Router from "express";
import pool from "./databaseRoute.js";
const router = Router();
// import pool from "./databaseRouter.js";
// import Router from "express";
// const router = Router();
// import mysql from "mysql2/promise";

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM traveldb");
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "서버 에러남" });
  }
});

export default router;
