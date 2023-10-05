# node-postgres-first-attempt

# PostgreSQL Challenges with ElephantSQL

## **Pre-requisites**

Before diving into the challenges, ensure the following are set up:

- **Node.js:** Ensure it's installed on your machine.
- **pg and dotenv Packages:** Install via npm using the command: **`npm install pg dotenv`**.
- **ElephantSQL Account:** Create a free account and set up a new database instance.

### **Environment Variables**

Environment variables are crucial for storing sensitive data like database credentials. Create a **`.env`** file in your project directory to store your ElephantSQL credentials. This **`.env`** file should never be pushed to GitHub, so ensure it's added to your **`.gitignore`** file.

### **Connection String**

A connection string encapsulates all the necessary information to connect to a database. Here's an example:

```
postgresql://username:password@host:port/database
```

Store your connection string as an environment variable to keep your database credentials secure. The format is a key-value pair separated by an equals sign:

```
DATABASE_URL=postgresql://username:password@host:port/database
```

## **Script Setup in package.json**

Before starting with the challenges, let's set up some scripts in your **`package.json`** file to ease the running of your scripts. These scripts will utilize the **`-r`** (require) syntax to preload **`dotenv`** configuration.

Open your **`package.json`** file and add the following to the **`"scripts"`** section:

```json
"scripts": {
  "connect": "node -r dotenv/config connect.js",
  "create-tables": "node -r dotenv/config createTables.js",
  "drop-tables": "node -r dotenv/config dropTables.js",
  "seed-data": "node -r dotenv/config seedData.js",
  "reset-database": "node -r dotenv/config resetDatabase.js"
}
```

Now, with these scripts set up, you can easily run each task using the **`npm run`** command followed by the script name, for example:

```bash
npm run connect
```

This will run the **`connect.js`** script with **`dotenv`** configuration preloaded, ensuring your environment variables are loaded correctly.

Now, let's move on to the challenges.

## **Challenges**

### **1️⃣ Database Connection Script**

**Task:** Create a script named **`connect.js`** to establish a connection to the ElephantSQL database using a connection string, log a success message, and close the connection.

### **2️⃣ Table Creation Script**

**Task:** Create a script named **`createTables.js`** to create the **`authors`**, **`books`**, and **`author_book`** tables in the database using the connection string.

### **3️⃣ Table Deletion Script**

**Task:** Create a script named **`dropTables.js`** to delete the **`authors`**, **`books`**, and **`author_book`** tables from the database using the connection string.

### **4️⃣ Data Seeding Script**

**Task:** Create a script named **`seedData.js`** to populate the **`authors`**, **`books`**, and **`author_book`** tables with data from the provided Google Sheets file using the connection string.

### **5️⃣ Database Reset Script**

**Task:** Create a script named **`resetDatabase.js`** to reset the database by dropping existing tables, creating tables, and seeding data using the connection string.

## 🏠 **Homework: Preventing SQL Injection with Parameterized Queries**

As we advance in our journey, tomorrow we'll be integrating a REST API with our PostgreSQL database using the **`pg`** package. This integration will involve accepting user inputs to query our database. However, this can open a door to a common and serious security vulnerability known as SQL Injection, if not handled properly.

### **Problem:**

SQL Injection occurs when malicious SQL code is inserted into database queries through user input fields, which can lead to unauthorized access, data leaks, and even data deletion.

### **Your Task:**

Research and understand the concept of parameterized queries and how they help in preventing SQL Injection. Look into how the **`pg`** package supports parameterized queries.

1. **Research:** Look into what SQL Injection is and why it's dangerous.
2. **Parameterized Queries:** Understand what parameterized queries are and how they prevent SQL Injection.
3. **Examples:** Look at examples of how to implement parameterized queries using the **`pg`** package.
