const mongoose = require('mongoose');

// Connect to DB
const connectToDatabase = () => {
    mongoose.connect( 
        process.env.DATABASE_URL, 
        { useNewUrlParser: true, useUnifiedTopology: true }
    );

    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log('Connected to DB!'));
}

module.exports = connectToDatabase;