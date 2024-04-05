const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth.js');
const urlRoutes = require('./routes/url.js');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())
app.get('/api/user', async (req, res) => {
  try {
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://pp3662504:pp3662504@cluster0.kztmo7u.mongodb.net/password-forget', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/url', urlRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
