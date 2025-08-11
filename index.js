require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Placeholder for routes (add more soon)
app.get('/', (req, res) => res.send('Backend is running!'));
app.use('/api/artists', require('./routes/artists'));
app.listen(5000, () => console.log('Backend running on port 5000'));