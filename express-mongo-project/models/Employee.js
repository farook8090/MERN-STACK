import mongoose from "mongoose";
import { Schema } from "mongoose";

const employeeSchema = new Schema({
  name: [{ type: String, require: true }],
  salary: [{ type: Number, require: true }],
  language: [{ type: String, require: true, default: "None" }],
  city: [{ type: String, require: true, default: "None" }],
  isManager: Boolean,
});

export const Employee = mongoose.model("employee", employeeSchema);
