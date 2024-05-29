const { createUser } = require('./schemas/userSchema');
const { createTrainingProgram } = require('./schemas/trainingProgramSchema');

const createSampleData = async () => {
  try {
    const sampleUserData = {
      user_id: 'sampleUser',
      email: 'sample@example.com',
      name: 'Sample User',
      profile_data: {
        bio: 'This is a sample user.',
        goals: 'Build muscle and strength.'
      }
    };

    const sampleProgramData = {
      program_id: 'sampleProgram',
      user_id: 'sampleUser',
      program_data: {
        phases: [
          {
            phase_name: 'Hypertrophy',
            start_date: '2023-01-01',
            end_date: '2023-02-01',
            exercises: [
              {
                exercise_name: 'Squat',
                sets: 4,
                reps: 8,
                weight: 100
              }
            ]
          }
        ]
      }
    };

    await createUser(sampleUserData);
    await createTrainingProgram(sampleProgramData);
    console.log('Sample data created successfully.');
  } catch (error) {
    console.error('Error creating sample data:', error);
  }
};

createSampleData();
