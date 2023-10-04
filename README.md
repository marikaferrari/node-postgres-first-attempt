# node-postgres-first-attempt

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
