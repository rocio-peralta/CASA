// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import app from "./index.js";

// dotenv.config();
// const Conection = async() => {
//   try {
//     await mongoose.connect(process.env.URL);
//     console.log("Database connected successfully");
//   }
//   catch (error) {
//     console.log("Error: ", error.message);
//   }
// }

// app.post("/register", async(req, res) => {
//   res.send('hello world')
//   const newUser = new User ({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//   })
//   const newRegister = await newUser.save();
//   res.json(newRegister);
//   })

//   export {Conection}