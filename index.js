require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
  origin: ['https://artistsgrid.vercel.app', 'http://localhost:3000'],
}));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Placeholder for routes (add more soon)
app.get('/', (req, res) => res.send('Backend is running!'));
app.use('/api/artists', require('./routes/artists'));
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));