import pool from "./databaseRoute.js";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// 회원가입

router.post("/", async (req,res)=>{
  const {email, name, password} = req.body;


  try{

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const [user] = await pool.execute('INSERT INTO user (email, name, password) VALUES (?,?,?)',
      [email,name, hashedPassword]);
    const userId = user.insertId;
    

    return res.status(200).json({msg:"화원가입 성공", userId});


  } catch(err){
    console.error(err);
    res.status(500).json({message:'서버 에러'});
  }
})
