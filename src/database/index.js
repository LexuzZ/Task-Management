const sequelize = require('./config');
const Task = require('./models/task');

const connectDB = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database connected!');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};

module.exports = { connectDB, Task };
