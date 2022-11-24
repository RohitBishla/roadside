import express from "express";
// const express = require("express");

const router = express.Router();

// var transform = require("node-json-transform").transform;
// import { transform } from "node-json-transform";
// or
// var { transform } = require("node-json-transform");

// var result = transform(
//   {
//     source,
//   },
//   {
//     map,
//   }
// );
// console.log(result);

// export const getPost = async (req, res) => {
//   const { source, map } = req.querry;
//   // const temp = {
//   //   id: "1",
//   //   regin: "India",
//   //   pakistan: "fasd",
//   // };
//   // const temp2 = {
//   //   id: "34",
//   //   regin: "Japan",
//   //   pakistan: "fasd",
//   // };
//   try {
//     const result = transform(
//       {
//         temp,
//       },
//       {
//         temp2,
//       }
//     );

//     const parvati = result;
//     res.json(parvati);

//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
export const getPost = async (req, res) => {
  const { source } = req.querry;
  // const temp = {
  //   id: "1",
  //   regin: "India",
  //   pakistan: "fasd",
  // };
  // const temp2 = {
  //   id: "34",
  //   regin: "Japan",
  //   pakistan: "fasd",
  // };
  try {
    // { source, map } = req.querry;
    // const result = transform({ source }, { map });
    // const parvati = result;
    // res.json(parvati);
    // console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export default router;
