const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const gamesRoutes = require('./routes/gamesRoutes');
const userRouter = require('./routes/userRoutes');


const app = express();
const port = 2000;

app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'], allowedHeaders: ['Content-Type', 'Authorization'] }));

app.use(express.json());

const uri = "mongodb+srv://beta:beta@beta.jbujh0v.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=beta"


mongoose.connect(uri,).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
}); 

app.use('/api', gamesRoutes);
app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}   );