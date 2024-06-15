const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Date,
    default: new Date(),
  },
});

const Admin = mongoose.model("admin", AdminSchema);
module.exports = Admin;
