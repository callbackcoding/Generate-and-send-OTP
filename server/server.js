const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://shantanu:1234@cluster0.veoh8.mongodb.net/")
const app = express();
dotenv.config();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors());

app.use(express.json());

//Signup and login
app.use("/email", emailRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
