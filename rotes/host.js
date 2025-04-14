import path from 'path';
import express from 'express';
import rooPath from '../utils/path.js';
import User from '../model/modle.js';

const hostRouter = express.Router();
const regresterdhomes = [];

hostRouter.get("/host/add-home", (req, res, next) => {
  res.sendFile(path.join(rooPath, 'views', 'addhome.html'));
});

hostRouter.post("/host/add-home", async (req, res, next) => {
  console.log('Form register successful', req.body);
  const user = new User({
    Name: req.body.name,
    Email: req.body.email,
    Address: req.body.address,
    Phone: req.body.phone
  });
  await user.save();
  regresterdhomes.push({ Name: req.body.name });
  res.sendFile(path.join(rooPath, 'views', 'homeadded.html'));
});

export { hostRouter, regresterdhomes };