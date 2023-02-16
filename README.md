<div align="center">
  <h1>Dev Blog</h1>
  <img src="https://github.com/MohammedMahdi21/dev-blog/blob/main/client/docs/dev-blog-logo.png?raw=true" alt="Dev Blog Screenshot" width="25%">
</div>

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## About

"Dev Blog" is a modern web application that allows developers to create, edit, and delete blog posts, as well as categorize them by category for easy navigation. Built with React, Node.js, MySQL, and Express, "Dev Blog" provides a user-friendly interface for developers to share their knowledge, insights, and experiences with the wider community. "Dev Blog" is the perfect platform for developers who want to showcase their projects, offer advice, or connect with like-minded peers.

## Features

- User authentication
- Post creation, editing, and deletion
- Categorization of posts for easy browsing
- CRUD functionality

## Technologies Used

- React
- Node.js
- MySQL
- Express

## Installation

To install "Dev Blog" on your machine, follow these steps:

1. Clone the repository: `https://github.com/MohammedMahdi21/dev-blog.git`
2. Install the dependencies: `npm install`
3. Create a MySQL database and configure the connection in the `.env` file.
```
# Database configuration
DB_HOST=localhost
DB_USER=root
DB_KEY=password
```
4. Start the client and server: `npm run start`
5. Open the app in your browser at `http://localhost:3000`.
6. Server will run on `http://localhost:8800`.


## Usage

Once you have the app running, you can create a new account or log in with an existing one. Once logged in, you can create new posts, edit existing ones, and delete them. You can also categorize your posts for easy browsing by others.

## Screenshots

<div align="center">
  <img src="https://i.imgur.com/gM37jvZ.png" alt="Login Screenshot" width="45%">
  <img src="https://i.imgur.com/w9XOMUI.png" alt="Post List Screenshot" width="45%">
  <img src="https://i.imgur.com/lN5v5J5.png" alt="Post Detail Screenshot" width="45%">
  <img src="https://i.imgur.com/7VREmI0.png" alt="Post Creation Screenshot" width="45%">
  <img src="https://i.imgur.com/tX9sWnT.png" alt="Post Editing Screenshot" width="45%">
</div>

## Dependencies

The "Dev Blog" application uses the following dependencies:

- `axios`: A library for making HTTP requests from the browser or Node.js.
- `moment`: A library for parsing, validating, and manipulating dates and times.
- `react`: A JavaScript library for building user interfaces.
- `react-dom`: A package for working with the DOM in React.
- `react-router-dom`: A library for routing in React applications.
- `sass`: A CSS preprocessor that extends the capabilities of CSS.
- `bcryptjs`: A library for hashing and comparing passwords.
- `cookie-parser`: A middleware for handling cookies in Express.js.
- `cors`: A middleware for handling cross-origin resource sharing (CORS) in Express.js.
- `dotenv`: A zero-dependency module for loading environment variables from a `.env` file.
- `express`: A popular web framework for Node.js.
- `jsonwebtoken`: A library for generating and verifying JSON Web Tokens (JWTs).
- `multer`: A middleware for handling file uploads in Express.js.
- `mysql`: A MySQL database driver for Node.js.
- `nodemon`: A tool for automatically restarting the server when changes are made to the code.

You can find the specific versions of these dependencies in the `package.json` file of the project. To install them, simply run the command `npm install` in the project directory.

## Contributing

Contributions are welcome! If you have any suggestions for new features, bug fixes, or other improvements, please submit a pull request.
