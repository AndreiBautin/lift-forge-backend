const admin = require('firebase-admin');
const { db } = require('../firebase');

// Define the Training Program Schema
const createTrainingProgramSchema = (programData) => ({
  program_id: programData.program_id,
  user_id: programData.user_id,
  program_data: {
    phases: programData.program_data.phases.map(phase => ({
      phase_name: phase.phase_name,
      start_date: admin.firestore.Timestamp.fromDate(new Date(phase.start_date)),
      end_date: admin.firestore.Timestamp.fromDate(new Date(phase.end_date)),
      exercises: phase.exercises.map(exercise => ({
        exercise_name: exercise.exercise_name,
        sets: exercise.sets,
        reps: exercise.reps,
        weight: exercise.weight
      }))
    }))
  },
  created_at: admin.firestore.FieldValue.serverTimestamp()
});

// Function to create a new training program
const createTrainingProgram = async (programData) => {
  const programRef = db.collection('programs').doc(programData.program_id);
  await programRef.set(createTrainingProgramSchema(programData));
};

// Function to get a training program by ID
const getTrainingProgramById = async (programId) => {
  const programRef = db.collection('programs').doc(programId);
  const doc = await programRef.get();
  if (!doc.exists) {
    console.log('No such training program!');
  } else {
    return doc.data();
  }
};

// Export functions
module.exports = {
  createTrainingProgram,
  getTrainingProgramById
};
