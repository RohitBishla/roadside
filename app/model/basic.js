const mongoose = require("mongoose");

const basicSchema = mongoose.Schema({
  try: { type: String },
});

exports.basicSchema = basicSchema;
