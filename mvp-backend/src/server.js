const express = require('express');
const cors = require('cors');
const app = express();
const db = require('../db/knex');
const NOTES_TABLE = 'notes';

app.use(cors());
app.use(express.json());

app.get("/api/notes", async (req, res) => {
    console.log("GET /api/notes access");
    const data = await db.select('*').from(NOTES_TABLE);
    // console.log(data);
    res.status(200).send(data);
    // res.status(200).send({notes: 'notes here'});
})

app.post("/api/scores", async (req, res) => {
    console.log("POST /api/scores");
    // const data = await db.insert

    res.status(201).send({scores : 'scores here'});

})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}/`);
});