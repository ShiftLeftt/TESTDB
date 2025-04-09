// import pool from "./databaseRouter.js";
import pool from "./databaseRoute.js";
import Router from "express";
const router = Router();
router.post("/", async (req, res) => {
  const { id, name } = req.body;
  try {
    await pool.query("INSERT INTO traveldb (id, name) VALUES (?, ?)", [
      id,
      name,
    ]);
    res.json({ id, name });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 에러남" });
  }
});

export default router;
