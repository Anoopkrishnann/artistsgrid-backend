const express = require('express');
const Artist = require('../models/Artist');
const router = express.Router();

// Registration
router.post('/register', async (req, res) => {
  try {
    const artist = new Artist(req.body);
    await artist.save();
    res.json({ success: true, artist });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login (simple version)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const artist = await Artist.findOne({ email, password });
  if (artist) res.json({ success: true, artist });
  else res.status(401).json({ success: false, message: 'Invalid credentials' });
});

module.exports = router;