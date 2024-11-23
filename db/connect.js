const mongoose = require('mongoose');

const connStr =
  'mongodb+srv://zhurenkooe:L2MBEGXqMFXsb7H3@nodeexpressproj.wqw84.mongodb.net/NodeTaskManager?retryWrites=true&w=majority&appName=NodeExpressProj';

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
