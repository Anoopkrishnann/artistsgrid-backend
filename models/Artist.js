const mongoose = require('mongoose');
const ArtistSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // For prototype—add hashing before production!
  bio: String,
  avatarUrl: String,
  artworks: [{ title: String, imageUrl: String, description: String, price: Number }]
});
module.exports = mongoose.model('Artist', ArtistSchema);