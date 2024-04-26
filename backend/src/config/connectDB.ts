import { Pool } from "pg";
import chalk from "chalk";
import fs from "fs";
import path from "path";

export const pool = new Pool({
  user: "users",
  host: "localhost",
  database: "users_auth",
  password: "hardpassalwaysok",
});

// Read the contents of the user.schema.sql file
const schemaFilePath = path.resolve(__dirname, "../schema/user.schema.sql");
const schemaSQL = fs.readFileSync(schemaFilePath, "utf-8");

// Function to create tables defined in the schema file
const createTables = async () => {
  try {
    // Check if the users table already exists
    const result = await pool.query(`
      SELECT EXISTS (
        SELECT 1
        FROM information_schema.tables
        WHERE table_schema = 'users' AND table_name = 'users'
      )
    `);

    const tableExists = result.rows[0].exists;

    if (!tableExists) {
      // Execute the SQL commands to create tables
      await pool.query(schemaSQL);
      console.log(chalk.greenBright("Tables created successfully"));
    }
  } catch (error) {
    console.error(chalk.red("Error creating tables:"), error);
  }
};

// configure the database connection
const connectDB = async () => {
  try {
    // Connect to the database
    await pool.connect();
    console.log(chalk.greenBright("Database connected successfully"));

    // Create tables
    await createTables();
  } catch (error) {
    console.error(chalk.red("Error connecting to database:"), error);
  }
};

export default connectDB;
