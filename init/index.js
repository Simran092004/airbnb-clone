const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main();
async function main(){
    try{
        await mongoose.connect(MONGO_URL);
        console.log('Connected to MongoDB');
    }catch(err){
        console.error('Error connecting to MongoDB',err);
    }
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"69c53cbe28aefedc3cb4983f"}))
    await Listing.insertMany(initData.data);
    console.log("Database initialized with sample data");
};

initDB();