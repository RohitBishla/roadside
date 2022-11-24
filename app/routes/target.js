import express from "express";
// const express = require("express");

import { postJson } from "../controller/target.js";

const router = express.Router();

// router.get("/", getPost);
router.post("/", postJson);

export default router;
