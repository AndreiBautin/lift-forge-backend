const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lift-forge.firebaseio.com'  // Replace with your actual project ID
});

const db = admin.firestore();

module.exports = { admin, db };
