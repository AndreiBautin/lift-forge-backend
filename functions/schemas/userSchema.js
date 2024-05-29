const admin = require('firebase-admin');
const { db } = require('../firebase');

// Define the User Schema
const createUserSchema = (userData) => ({
  user_id: userData.user_id,
  email: userData.email,
  name: userData.name,
  profile_data: {
    bio: userData.profile_data.bio,
    goals: userData.profile_data.goals
  },
  created_at: admin.firestore.FieldValue.serverTimestamp()
});

// Function to create a new user
const createUser = async (userData) => {
  const userRef = db.collection('users').doc(userData.user_id);
  await userRef.set(createUserSchema(userData));
};

// Function to get a user by ID
const getUserById = async (userId) => {
  const userRef = db.collection('users').doc(userId);
  const doc = await userRef.get();
  if (!doc.exists) {
    console.log('No such user!');
  } else {
    return doc.data();
  }
};

// Export functions
module.exports = {
  createUser,
  getUserById
};
