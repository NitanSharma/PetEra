const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./src/config/monogo.config');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const UserRoute = require('./src/routes/User.route');

const app = express();
const PORT = 3000;

app.use(cors({
    origin: 'http://localhost:5173', // your React app
    credentials: true // 👈 this allows cookies to be sent
}));// this is to allow cross origin requests 

app.use(express.json())// this is to parse json data
app.use(express.urlencoded({extended:true}))// this is to parse url encoded data
app.use(cookieParser())// this is to parse cookies

app.use('/api/user', UserRoute); // Register user routes

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on http://localhost:${PORT}`);
});