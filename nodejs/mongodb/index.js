const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const User = require("./models/user");
const jwt = require("jsonwebtoken");

dotenv.config();

const app = express();

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use(express.json());

app.post("/api/users", async (req, res) => {
  try {
    const { name, password, email, mobile } = req.body;
    const user = new User({ name, password, email, mobile });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/login", async (req, res) => {    
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(401).json({ message: "Invalid email or password" });
        } else {
            if (user.password !== password) {
                res.status(401).json({ message: "Invalid email or password" });
            } else {
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
                res.status(200).json({ message: "Login successful", token });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});