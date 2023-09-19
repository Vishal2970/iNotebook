// const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";


// const connectToMongo = () => {
//   mongoose.connect(mongoURI,() => {
//       console.log('Connected to MongoDB successfully');
//     })
// };

// module.exports = connectToMongo;


const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/iNotebook'; // Replace 'your-database-name' with 'iNotebook'

const connectToMongo = () => {
  return mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
};

module.exports = connectToMongo;
