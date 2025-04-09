import express from "express";
import pool from "./databaseRoute.js";

const router = express.Router();
router.delete("/", async (req, res) => {
  try {
    const [rows] = await pool.query("DELETE FROM traveldb WHERE id = ?", [
      req.body.id,
    ]);
    res.json({ affectedRows: rows.affectedRows });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "서버 에러남" });
  }
});

export default router;
