const mongoose = require('mongoose');

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: 'kross_international_db',
      
    })
    .then(() => {
      console.log('Connected to database.');
    })
    .catch((err) => {
      console.error(`Some Error occurred: ${err}`);
    });
};

module.exports = {dbConnection};
