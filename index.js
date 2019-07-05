require('dotenv').config();

const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (req, res) =>{
    res.send("Hello World")
});

const port = process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;

app.listen(port, host, () => {
    console.log(`pd-tracker server running at http://${host}:${port}/`);
});
