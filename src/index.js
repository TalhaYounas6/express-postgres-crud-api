import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import errorHandler from "./middlewares/errorhandler.js";
import userRouter from "./routes/userRoutes.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Routes
app.use("/api", userRouter);

// Middlewares
app.use(express.json());
app.use(cors());

// Error Handling middleware
app.use(errorHandler);

// Testing Postgres connection
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  console.log("end");
  console.log(`The database name is: ${result.rows[0].current_database} `);
});

//Creating users table;
createUserTable();

// Server listening
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
