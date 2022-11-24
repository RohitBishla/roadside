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

export const getPost = async (req, res) => {
  const { post } = result;
  try {
    const parvati = await post;
    res.json(post);
  } catch (error) {
    console.log(error);
  }
};

export default router;
