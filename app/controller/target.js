import express from "express";
// const express = require("express");

const router = express.Router();

// var transform = require("node-json-transform").transform;
import { transform } from "node-json-transform";
import spawn from 'child_process'
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

export const postJson = async (req, res) => {
  const { source, map } = req.querry;
  let strigifiedData = JSON.stringify(map);
  const py = spawn('python', ['script.py', strigifiedData]);
  var resultString = "";
  var resultData = ""
  py.stdout.on('data', function (stdData) {
    resultString += stdData.toString();
  })
  py.stdout.on('end', function () {
    resultData=JSON.parse(resultString);
  })

  // console.log(resultData);
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
    const result = transform({ source }, { resultData });

    const parvati = result;
    res.json(parvati);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export default router;
