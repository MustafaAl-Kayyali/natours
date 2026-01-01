const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  encodeURIComponent(process.env.DATABASE_PASSWORD)
);

mongoose.connect(DB).then(() => {
  console.log('DB connection successful');
});

// to open server
const port = 3000;
app.listen(port, () => {
  console.log(`🚀 App running on port ${port}`);
});

