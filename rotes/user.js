// core module
 //const path=require('path');
// import mongoose from 'mongoose';
import path from 'path';
// const express=require('express')
import express from 'express';
const userRouter=express.Router();



// const rooPath=require('../utils/path');
import rooPath from '../utils/path.js';
// const { regresterdhomes } = require('./host');
import { regresterdhomes } from './host.js';

userRouter.get("/contact-us",(req,res,next)=>{
  res.sendFile(path.join(rooPath,'views','contact-us.html'))
});

userRouter.get("/About-us",(req,res,next)=>{
  res.sendFile(path.join(rooPath,'views','About-us.html'))
});

userRouter.get("/About-me",(req,res,next)=>{
  res.sendFile(path.join(rooPath,'views','About-me.html'))
});


userRouter.get("/",(req,res,next)=>{
  console.log(regresterdhomes);
res.sendFile(path.join(rooPath,'views','home.html'))
});

export { userRouter };