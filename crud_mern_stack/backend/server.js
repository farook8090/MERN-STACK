import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors()); //use for cors policy
app.use(express.json()); //used to convert data in json format ...

// database connection
mongoose
  .connect("mongodb://localhost:27017/mernstack_crud")
  .then(() => {
    console.log("db connection successfully");
  })
  .catch((error) => {
    console.log(error);
  });

//user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //used to create column of timestamp in datbase timestamps:true
  }
);

// creating collection in database
const User = mongoose.model("User", userSchema);

app.post("/createuser", async (req, res) => {
  try {
    const bodyData = req.body;
    const user = new User(bodyData); //collection created
    const userData = await user.save(); //save in db successfully
    res.send(userData); //this will give us database return status after saving into it.
  } catch (error) {
    res.send(error);
  }
});

//get all the data from user collection

app.get("/readalluser", async (req, res) => {
  try {
    const userData = await User.find({}); //fetching all the data from database from collection User.
    res.send(userData); // sending data to front-end
  } catch (erorr) {
    console.log(erorr);
  }
});

// read only single
app.get("/read/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById({ _id: id });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

//update user
app.put("/updateuser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

// delete user
app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete({ _id: id });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  res.send("from get route");
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
