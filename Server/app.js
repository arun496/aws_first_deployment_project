require('dotenv').config();

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "hotels",
    password: "postgres",
    port: 5432,
});
const query = (text, params) => pool.query(text, params);

const app = express();
app.use(cors());
app.use(express.json());


app.get("/api/hotels", async (req, res) => {
    try {
        const data = await query("SELECT * from myhotels;");
        res.send(data.rows);
    } catch(e) {
        console.log("Some error in fetching..", e);
    }
})

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Deployment Project</h1>");
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening at ${port}`);
})