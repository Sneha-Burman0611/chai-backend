// Import statements
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

// Configure environment variables
dotenv.config({
  path: './.env'
});

// Initialize Express app
const app = express();

// Connect to MongoDB and start server
connectDB()
  .then(() => {
    // Error handler
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
    
    // Start server
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed", err);
  });









/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/