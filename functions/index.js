const express = require('express');
const cors = require('cors');
const functions = require('firebase-functions');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const serviceAccount = require('./serviceAccountKey.json');
const verifyToken = require('./middleware/authMiddleware');

// Initialize Firebase Admin
initializeApp({
  credential: cert(serviceAccount),
});

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Example protected route
app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Expose the Express API as a function
exports.api = functions.https.onRequest(app);
