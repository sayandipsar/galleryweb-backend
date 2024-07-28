const mongoose = require('mongoose');


module.exports = async () => {
  try {
    await mongoose.connect('mongodb+srv://iGalary:imgGal2022@cluster0.hj7qk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    // await mongoose.connect(process.env.DB_URL);
    console.log('Database Connected Successfully');
  } catch (error) {
    console.log('Database Connection Unsuccessful! Try Again', error);
    throw new Error(error);
  }
}

