import express from "express";

import { getPost, postJson } from "../controller/target";

const router = express.Router();

router.get("/", getPost);
router.post("/", postJson);

export default router;
