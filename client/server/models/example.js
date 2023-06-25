// Load required packages
let mongoose = require("mongoose");

// Define our user schema
let ExampleSchema = new mongoose.Schema({
  name: { type: String, default: "New Example Item" },
  description: { type: String, default: "" },
  deadline: { type: Date },
  completed: { type: Boolean, default: false },
}, { versionKey: false });

// Export the Mongoose model
module.exports = mongoose.model("Example", ExampleSchema);
