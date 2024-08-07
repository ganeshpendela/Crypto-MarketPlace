const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const flash = require('connect-flash');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
}));
app.use(flash());

// Middleware to protect routes
const isAuthenticated = (req, res, next) => {
  if (req.session.isAuthenticated) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
};

// Login route for guest users
app.post('/login', (req, res) => {
  req.session.isAuthenticated = true;
  res.status(200).json({ message: 'Login successful' });
});

// Logout route
app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.status(200).json({ message: 'Logout successful' });
  });
});

// Protected route to fetch coin data
app.get('/api/coin/:id', isAuthenticated, (req, res) => {
  const coinId = req.params.id;

  // Fetch coin data logic here
  // Example response:
  res.status(200).json({ message: `Fetched data for coin ${coinId}` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
