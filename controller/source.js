import express from "express";

const router = express.Router();

var transform = require("node-json-transform").transform;
// or
var { transform } = require("node-json-transform");

var result = transform(
  {
    text: "hello",
  },
  {
    item: {
      message: "text",
    },
  }
);
console.log(result);

export const getSource = async (req, res) => {
  const { main } = req.query;
  try {
    await transform();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export default router;
