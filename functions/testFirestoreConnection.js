const { getUserById } = require('./schemas/userSchema');
const { getTrainingProgramById } = require('./schemas/trainingProgramSchema');

const testFirestoreConnection = async () => {
  try {
    const user = await getUserById('sampleUser');
    const program = await getTrainingProgramById('sampleProgram');

    if (!user) {
      console.log('No such user!');
    } else {
      console.log('User data:', user);
    }

    if (!program) {
      console.log('No such training program!');
    } else {
      console.log('Training program data:', program);
    }
  } catch (error) {
    console.error('Error testing Firestore connection:', error);
  }
};

testFirestoreConnection();
