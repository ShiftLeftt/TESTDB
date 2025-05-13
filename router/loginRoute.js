import pool from "./databaseRoute.js";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();


router.post("/", async (req, res) => {
  const {email, password} = req.body;
  try{
    if(!email || !password){
      return res.status(400).json({success:false, message:'아이디와 비밀번호를 확인하세요'})
    }

    const [user] = await pool.execute('SELECT id, email, password FROM user WHERE email=?',[email])


    const isMatch = await bcrypt.compare(password, rows[0].password);


    if (!isMatch) {
      return res.status(400).json({ msg: "비밀번호가 일치하지 않습니다." });
    }



  } catch(err){
    console.error(err);
    res.status(500).json({message:'서버 에러'});
  }


})