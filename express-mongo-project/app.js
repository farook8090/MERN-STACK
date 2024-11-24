import express from "express";
import ejs from "ejs";
import mongoose from "mongoose";
import body_parser from "body-parser";
import path from "path";
import { Employee } from "./models/Employee.js";

const app = express();
const port = 3000;

app.use(express.static("public")); //for css and js files

app.set("view engine", "ejs");
app.set("views", "views"); //for templates files

let conn = mongoose.connect("mongodb://127.0.0.1:27017/company");

app.get("/",async (req, res) => {
  const employees = await Employee.find();
  res.render("index.ejs",{employees});
});

//generate 15 random employees
app.post("/generate",async (req, res) => {
    await Employee.deleteMany();
  const programmingLanguage = [
    "Python",
    "javaScript",
    "CSS",
    "HTML",
    "AWS",
    "Machine Learning",
    "ReactJS",
    "nodeJS",
    "ExpressJS",
    "PHP",
  ];

  const empName = [
    "Mona",
    "Sona",
    "Rohan",
    "Sohan",
    "Ajay",
    "Rahul",
    "Nitin",
    "Anshuman",
    "Farook",
    "Akshay",
  ];

  const cities = [
    "New York",
    "London",
    "Paris",
    "Toronto",
    "Hawai",
    "Mumbai",
    "Tokyo",
    "Berlin",
  ];

  //   console.log(Math.floor(Math.random()*10));

  const empDummyData = Array.from({ length: 15 }, () => ({
    name: empName[Math.floor(Math.random() * 10)],
    salary: Math.floor(Math.random() * 100000) + 50000,
    language: programmingLanguage[Math.floor(Math.random() * 10)],
    city: cities[Math.floor(Math.random() * 8)],
    isManager: Math.random() > 0.5 ? true : false,
  }));

  console.log("15 New Employee Generated . Please Check As Mentioned Below.");
  console.log(empDummyData);

  await Employee.insertMany(empDummyData);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
