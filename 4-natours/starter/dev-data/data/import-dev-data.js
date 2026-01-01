const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const Tour = require(`../../models/tourModels`);
const { json } = require('stream/consumers');
const encodedPassword = encodeURIComponent(process.env.DATABASE_PASSWORD);
const DB = process.env.DATABASE.replace('<PASSWORD>', encodedPassword);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
    }).then(() => {
        console.log('DB connection successful');
    });
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

const importData = async () => {
    try {
        await Tour.create(tours);
        console.log('Data successfully imported');
    } catch (err) {
        console.log(err);
    }
    process.exit();
}   
//delete all data on COLLECTION
const deleteData = async ()=>{
    try{
        await Tour.deleteMany({});
        console.log('Data successfully deleted');  
    }catch(err){
        console.log(err);
    }
    process.exit();
}
if(process.argv[2]==(`--import`)){
    importData();
}
else if(process.argv[2]==(`--delete`)){
    deleteData();
}
console.log(process.argv);
