import express from "express";
import pool from "./databaseRoute.js";
const router = express.Router();
router.put("/", async (req, res) => {
  const { id, name } = req.body;
  try {
    const [rows] = await pool.query(
      "UPDATE traveldb SET name = ? WHERE id = ?",
      [name, id]
    );
    res.json({
      affectedRows: rows.affectedRows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "서버 에러남" });
  }
});

export default router;
