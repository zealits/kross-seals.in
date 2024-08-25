const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require("path");
const { dbConnection } = require('./database/dbConnection.js');
const productRoutes = require('./routes/productRoute.js');
const { errorMiddleware } = require('./middleware/error.js');
const bodyParser = require('body-parser');
const contactUsRoute = require('./routes/contactUsRouter');

const app = express();
dotenv.config({ path: './config/config.env' });
app.use(bodyParser.json());
dbConnection();

app.use(cors());
app.use(express.json());

// Define routes
app.use('/api/v1', productRoutes);
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.use('/api', contactUsRoute);

// Serve frontend
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
});

// Use the error handling middleware last
app.use(errorMiddleware);

module.exports = app;
