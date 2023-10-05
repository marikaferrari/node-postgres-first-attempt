// Import the pg package
import pg from 'pg';

// Connect to the database by creating a new pool instance
const connectionString = process.env.DATABASE_URL;

const pool = new pg.Pool({
  connectionString,
});

const res = await pool.query('DROP TABLE author_book');

// TEST the query
console.log(res);

// Close the connection
await pool.end();
