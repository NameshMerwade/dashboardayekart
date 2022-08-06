const express = require('express');
var cors = require('cors');

const connection = require('./connection');

const userRoute = require('./routes/user');

const app = express();

const port = process.env.PORT

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', userRoute);

app.get("/", (req, res) => {
    res.send("hello world");
})

app.listen(port, () => {
    console.log("port http://localhost:8081")
})

module.exports = app;



