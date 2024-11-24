# Vanilla JS Todo App with MongoDB

This project is a simple **Todo App** built with **Vanilla JavaScript**, **HTML**, **CSS**, and **MongoDB**. The app allows you to create, edit, and delete todos, and stores them in a MongoDB database using **Mongoose**. The app provides a clean, intuitive interface, and the data is dynamically updated via API calls.

### Todo List View

![Todo List View](./todo1.png)

### Add/Edit Todo Form

![Add/Edit Todo Form](./todo2.png)

## Features

- **Add Todos**: You can add new tasks to your todo list.
- **Edit Todos**: You can modify the text of any existing todo.
- **Delete Todos**: You can delete a todo from the list.
- **Persistence**: Todos are saved to a MongoDB database, so they persist across page refreshes.

## Technologies Used

- **HTML**: For the structure and layout of the page.
- **CSS**: For styling the app.
- **JavaScript**: For the logic and functionality of the app, including DOM manipulation and API requests.
- **MongoDB**: For storing todos.
- **Mongoose**: To interact with MongoDB in a structured way.
- **Node.js/Express**: Backend server to handle API requests.

## How to Set Up and Run

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (with npm)
- **MongoDB** (either local or using a cloud service like MongoDB Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app

2. Install the necessary dependencies:
   ```bash
   npm install
   
3. Set up your MongoDB connection:

   - Create a .env file in the root directory.
   - Add your MongoDB URI:
      ```bash
      MONGO_URI=your_mongo_connection_string

5. Run server:

   ```bash
   http://localhost:3000

6. Open the app in your browser:

   ```bash
   http://localhost:3000

## How It Works

### Frontend

The frontend is built with **Vanilla JavaScript**, and it interacts with the backend API to handle the todo data. It includes:

- **Todo List Rendering**: Displays the current todos fetched from the backend.
- **Form for Adding Todos**: A simple input form where you can add new tasks.
- **Edit/Delete Buttons**: Each todo has buttons to edit or delete the task.

### Backend

The backend is built with **Node.js** and **Express** to handle the API routes. It uses **Mongoose** for interacting with the MongoDB database.

- **GET /todos**: Fetches all todos from the database.
- **POST /todos**: Adds a new todo to the database.
- **PUT /todos/:id**: Updates an existing todo.
- **DELETE /todos/:id**: Deletes a todo from the database.

### Mongoose Schema

The todo items are stored in the MongoDB database using a Mongoose schema. Each todo has the following properties:

   ```javascript
   const TodoSchema = new mongoose.Schema({
     text: { type: String, required: true },
     completed: { type: Boolean, default: false },
   });





