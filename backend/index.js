// index.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
// Enable CORS for all routes
app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

mongoose.set('strictQuery', false);
// Connect to MongoDB
mongoose.connect('mongodb+srv://abdurrehmansherazi190:MnsyCQsr0V9l2qPm@loginify-registree.xj0bjoj.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
  })
  .catch(error => console.error('Error connecting to MongoDB:', error));
