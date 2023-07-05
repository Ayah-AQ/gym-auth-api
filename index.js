'use strict';

require('dotenv').config(); // Import dotenv library to load environment variables
const app = require('./src/server.js');
const { db } = require('./src/models/index.js');

const PORT = process.env.PORT || 3000;

db.sync() // Sync the database models
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
