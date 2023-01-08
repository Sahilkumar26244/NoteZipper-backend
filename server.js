const express = require('express');
// const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const cors = require('cors')




const app = express();
app.use(cors());
// dotenv.config();
connectDB();
app.use(express.json());

app.get('/',(req,res) => {
    res.send("welcome")
})


app.use('/api/users', userRoutes);

app.use('/api/notes', noteRoutes);



app.use(notFound)
app.use(errorHandler)

const PORT = 5000

app.listen(PORT,() => {
    console.log("server is started on 5000")
})