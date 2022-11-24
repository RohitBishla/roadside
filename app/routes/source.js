import express from "express";
// const express = require("express");

// import { postJson } from "../controller/target.js";
import { getPost } from "../controller/source.js";

const router = express.Router();

router.get("/source", getPost);
// router.post("/target", postJson);

export default router;
