const express = require('express');
const cors = require('cors');
const { auth, db } = require('./firebase');
const verifyToken = require('./middleware/authMiddleware');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Example protected route
app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Expose the Express API as a function
exports.api = functions.https.onRequest(app);
