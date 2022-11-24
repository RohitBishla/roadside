import express from "express";
// const express = require("express");

const router = express.Router();

// var transform = require("node-json-transform").transform;
import { transform } from "node-json-transform";
import { source } from "./source.js";
// import spawn from "child_process";
// or
// var { transform } = require("node-json-transform");

var result = transform(
  {
    source,
  },
  {
    item: {
      SSN: ["1", "-", "122-34-6543"],
      CustomerFullName: ["firstName", "lastName"],
      CustomerAddress: ["address.street", "address.suite"],
      CustomerCity: ["address.city"],
      CustomerZipCode: ["address.zipcode"],
      CustomerProfession: ["SELF"],
      CustomerAge: ["age"],
      LoanHistory: [
        "loanHistory.item.collateral",
        "loanHistory.item.collateral.estimatedValues",
        "0",
      ],
      TotalAssets: ["liquid_assets", "non_liquid_assets"],
    },
    operate: [
      {
        run: (SSN) => {
          return "1-122-34-6543";
        },
        on: "SSN",
      },

      {
        run: (CustomerFullName) => {
          return CustomerFullName[0] + " " + CustomerFullName[1];
        },
        on: "CustomerFullName",
      },

      {
        run: (CustomerAddress) => {
          return CustomerAddress[0] + " " + CustomerAddress[1];
        },
        on: "CustomerAddress",
      },

      {
        run: (CustomerCity) => {
          return CustomerCity[0];
        },
        on: "CustomerCity",
      },

      {
        run: (CustomerZipCode) => {
          return CustomerZipCode[0];
        },
        on: "CustomerZipCode",
      },

      {
        run: (CustomerProfession) => {
          return "SELF";
        },
        on: "CustomerProfession",
      },

      {
        run: (CustomerAge) => {
          return CustomerAge[0];
        },
        on: "CustomerAge",
      },

      {
        run: (LoanHistory) => {
          return "loanHistory.item.collateral,loanHistory.item.collateral.estimatedValues,0,";
        },
        on: "LoanHistory",
      },

      {
        run: (TotalAssets) => {
          return TotalAssets[0] + " " + TotalAssets[1];
        },
        on: "TotalAssets",
      },
    ],
  }
);
console.log(result);

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
  // const { source, map } = req.querry;

  // let strigifiedData = JSON.stringify(map);
  // const py = spawn('python', ['script.py', strigifiedData]);
  // var resultString = "";
  // var resultData = ""
  // py.stdout.on('data', function (stdData) {
  //   resultString += stdData.toString();
  // })
  // py.stdout.on('end', function () {
  //   resultData=JSON.parse(resultString);
  // })

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
    const result = transform({ source });

    const katrina = result;
    res.json(katrina);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export default router;
