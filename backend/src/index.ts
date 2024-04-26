import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.route";
import connectDB from "./config/connectDB";

// Initialize dotenv to access environment variables
dotenv.config();

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all requests
app.use(morgan("dev")); // Log all requests to the console

// Get the PORT from the environment variables
// Add PORT=3000 to the .env file
const PORT = process.env.PORT;

// Basic route
app.get("/", (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: " Welcome to CodeGenitor API",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// User routes
app.use("/api/user", userRouter);

// Unknown route handler
app.use((req: Request, res: Response) => {
  return res.status(404).json({
    message: "Route not found",
  });
});

// unknonw route handler
app.use((req: Request, res: Response) => {
  return res.status(404).json({
    message: "Route not found",
  });
});

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connectDB(); // connect to the database
});
