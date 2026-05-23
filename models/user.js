const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose').default;
// console.log(passportLocalMongoose); passwordLocalMongoose is a function, not an object. 
// It is a plugin that adds methods to the user schema for handling password hashing and authentication.
// console.log(typeof passportLocalMongoose); TypeError: passportLocalMongoose is not a function
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);