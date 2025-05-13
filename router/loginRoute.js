import pool from "./databaseRoute.js";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();


router.post("/", async (req, res) => {
  const {email, password} = req.body;
  try{
    if(!email || !password){
      return res.status(400).json({success:false, message:'아이디와 비밀번호를 확인하세요'})
    }

    const [user] = await pool.execute('SELECT id, email, password FROM user WHERE email=?',[email])

    if(user.length === 0){
      return res.status(400).json({msg:"사용자를 찾을 수 없습니다."});
    }
    const userId = user[0].id;

    const isMatch = await bcrypt.compare(password, user[0].password);

    if (!isMatch) {
      return res.status(400).json({ msg: "비밀번호가 일치하지 않습니다." });
    }
    const token = jwt.sign({id:user[0].id}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRES_IN});
    res.cookie("token", token, {
      success: true,
    })









  } catch(err){
    console.error(err);
    res.status(500).json({message:'서버 에러'});
  }


})