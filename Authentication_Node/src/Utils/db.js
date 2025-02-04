const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/authentication')
        console.log("Connected to DB")
    } catch (err) {
        console.error("error:" , err.message)
    }
}

module.exports = connectToDB