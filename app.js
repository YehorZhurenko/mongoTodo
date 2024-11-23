const express = require('express');
const app = express();
const taskRouter = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

//  middleware

app.use(express.static('./public'));
app.use(express.json());

//  routes

app.use('/api/v1/tasks', taskRouter);

const PORT = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`server is runing on port ${PORT} ... `);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
