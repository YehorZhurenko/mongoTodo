# To-Do App with MongoDB and Mongoose

This project is a simple To-Do application that performs CRUD operations using **Node.js**, **Express.js**, and **MongoDB** with the **Mongoose** ODM.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- npm (comes with Node.js)

## Installation

### Step 1: Clone the repository
```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app

### Step 2: Install project dependencies
```bash
npm install

### Step 3: Set up environment variables

1. Create a `.env` file in the root directory.
2. Add the following MongoDB URI:

   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/todo-db?retryWrites=true&w=majority

### Step 4: Start the development server

```bash
npm start
Open http://localhost:3000 in your browser to view the app.
