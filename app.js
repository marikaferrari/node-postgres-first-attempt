const PORT = 3000;

// 1st Goal: Import the pg package
import pg from 'pg';

// 2nd Goal: Connect to the database
// We need to create a new pool instance

// Get the connection string
const connectionString = process.env.DB_CONNECTION_STRING;

const pool = new pg.Pool({
  // REMEMBER to pass in your connection details
  connectionString,
});

// 3rd Goal: Send a query (SELECT * FROM books)
// We can use a query() method to connect it
// Remember that the query is a string!
const res = await pool.query('SELECT * FROM authors;');

// TEST it
console.log(res);

// 4th Goal: Close the connection
// We need to use the end() method
await pool.end();
