require('dotenv').config({ path: './config.env' });
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.json()); // support json encoded boies
app.use(express.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));
app.use('/api/admin', require('./routes/admin'));

app.use(errorHandler);

// redirect to auth routes

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT} now`);
});

process.on('unhandledRejection', (err) => {
  console.log(`Logged error: ${err}`);
  server.close(() => {
    process.exit(1);
  });
});
