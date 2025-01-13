# Game Console API

## Overview

The Game Console API allows you to manage game consoles and games. You can perform CRUD operations on consoles and games, as well as search and sort games based on different criteria. The API is powered by Node.js, Express, and Sequelize, with a MySQL database.

## Features

- **CRUD operations** for both consoles and games.
- **Search functionality** for games by title and genre.
- **Pagination** with limit and offset for listing consoles and games.
- **Sorting** for games by release year (ascending or descending).
- API **documentation** accessible via the root endpoint.

## Prerequisites

- Node.js (v20 or later)
- MySQL database
- Sequelize ORM
- Postman for API testing


## Installation

To get started with the Game Console API, follow the steps below:

### 1. Clone the repository

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/MehmetSpns/game-console-API.git
```

Navigate into the project directory:

```bash
cd game-console-API
```

### 2. Install dependencies

Install the required dependencies using npm (Node.js package manager). This will install all necessary packages specified in the `package.json` file:

```bash
npm install
```

### 3. Set up the MySQL database

Create a MySQL database for the project. You can do this by logging into your MySQL instance and running:

```sql
CREATE DATABASE game_console_api;
```

Make sure to configure your database connection in the `config/config.json` (or environment variables) file. Ensure the credentials (username, password, database name, etc.) are correct.

### 4. Set up environment variables

Create a `.env` file in the project root directory to store sensitive information such as the database credentials. For example:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=game_console_api
```

### 5. Run database migrations

Use Sequelize CLI to set up the necessary tables in the database. Run the following command to apply the migrations:

```bash
npx sequelize-cli db:migrate
```

This will create the required tables in your MySQL database.

### 6. Start the server

You can start the server using one of the following commands:

- For development mode with auto-reload:

```bash
npm run dev
```

- Or, if you prefer to run the app directly:

```bash
node src/app.js
```

The server will run on the default port (e.g., `http://localhost:3000`).
Click on the provided one (inside the console after launching it :] )

### 7. Test the API

You can now test the API using Postman or any other API testing tool. You can access the full API documentation at the root endpoint (`/`).

