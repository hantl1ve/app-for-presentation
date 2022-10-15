const express = require('express');
const app = express();
var cors = require('cors')
const {main, getAllNotes, addNote, deleteNote, changeNote} = require('./mongoBD')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/notes', (req, res) => {
  getAllNotes().then((notes) => {res.send(notes)})
});

app.post('/notes', (req, res) => {
  addNote(req.body).then((databaseRes) => {
    if (databaseRes.acknowledged) {
        res.send(databaseRes); 
    }
  })
});

app.delete('/notes', (req, res) => {
  deleteNote(req.body).then((databaseRes) => {
    if (databaseRes.acknowledged) {
        res.send();
    }
  })
});

app.put('/notes', (req, res) => {
  changeNote(req.body).then((databaseRes) => {
    if (databaseRes.acknowledged) {
        res.send(); 
    }
  })
});

app.listen(3333, () => {
    console.log('Application listening on port http://localhost:3333');
});

main().catch(console.error);